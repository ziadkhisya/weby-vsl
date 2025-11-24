"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Player from "@vimeo/player";
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Settings,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type Provider = "youtube" | "vimeo" | "hls" | "direct";

const resolveProvider = (): Provider => {
  // Force Vimeo for this implementation as requested
  return "vimeo";
};

const embedBaseUrl =
  process.env.NEXT_PUBLIC_EMBED_URL ?? process.env.EMBED_URL ?? "";

const analyticsMilestones = [25, 50, 75, 100];

const preventKeys = new Set([" ", "Spacebar", "ArrowRight", "ArrowLeft"]);

export function VslPlayer() {
  const provider = resolveProvider();
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const vimeoPlayerRef = useRef<Player | null>(null);
  const analyticsRef = useRef<Set<number>>(new Set());

  const [gateOpen, setGateOpen] = useState(false);

  // Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [controlsTimeout, setControlsTimeout] = useState<NodeJS.Timeout | null>(null);

  const sanitizedEmbedSrc = useMemo(() => {
    // Default Vimeo placeholder
    const defaultVimeo = "https://vimeo.com/1021827374";

    // If env var is a YouTube URL, ignore it and use default Vimeo
    if (embedBaseUrl.includes("youtube") || embedBaseUrl.includes("youtu.be")) {
      return defaultVimeo;
    }

    return embedBaseUrl || defaultVimeo;
  }, [gateOpen, provider]);

  const fireMilestone = (percent: number) => {
    analyticsMilestones.forEach((milestone) => {
      if (percent >= milestone && !analyticsRef.current.has(milestone)) {
        analyticsRef.current.add(milestone);
        console.info(`[analytics] VSL reached ${milestone}% watch time`);
      }
    });
  };

  // Keyboard prevention
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const handleKeydown = (event: KeyboardEvent) => {
      if (preventKeys.has(event.key)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    node.addEventListener("keydown", handleKeydown);
    return () => node.removeEventListener("keydown", handleKeydown);
  }, []);

  // Initialize Vimeo Player
  useEffect(() => {
    if (!gateOpen || provider !== "vimeo" || !iframeRef.current) return;

    // If we already have a player, destroy it to re-init (though usually not needed if src doesn't change)
    if (vimeoPlayerRef.current) {
      // vimeoPlayerRef.current.destroy();
      return;
    }

    const player = new Player(iframeRef.current, {
      url: sanitizedEmbedSrc as any,
      controls: false, // We want custom controls
      autoplay: true,
      responsive: true,
      dnt: true,
    });

    vimeoPlayerRef.current = player;

    player.on("play", () => setIsPlaying(true));
    player.on("pause", () => setIsPlaying(false));
    player.on("timeupdate", (data) => {
      setProgress((data.seconds / data.duration) * 100);
      setDuration(data.duration);
      fireMilestone((data.seconds / data.duration) * 100);
    });
    player.on("ended", () => {
      setIsPlaying(false);
      fireMilestone(100);
    });
    player.on("volumechange", (data) => {
      setVolume(data.volume);
    });

    player.getVolume().then((vol) => setVolume(vol));

    return () => {
      player.destroy();
      vimeoPlayerRef.current = null;
    };
  }, [gateOpen, provider, sanitizedEmbedSrc]);


  // HLS / Direct setup (Legacy support)
  // HLS / Direct setup (Legacy support)
  // Removed unused effect

  // Controls Handlers
  const togglePlay = useCallback(() => {
    if (provider === "vimeo" && vimeoPlayerRef.current) {
      if (isPlaying) {
        vimeoPlayerRef.current.pause();
      } else {
        vimeoPlayerRef.current.play();
      }
    }
  }, [provider, isPlaying]);

  const handleVolumeChange = useCallback((value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (provider === "vimeo" && vimeoPlayerRef.current) {
      vimeoPlayerRef.current.setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  }, [provider]);

  const toggleMute = useCallback(() => {
    if (provider === "vimeo" && vimeoPlayerRef.current) {
      const newMuted = !isMuted;
      setIsMuted(newMuted);
      vimeoPlayerRef.current.setVolume(newMuted ? 0 : 1); // Simple toggle
      setVolume(newMuted ? 0 : 1);
    }
  }, [provider, isMuted]);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(err => console.error(err));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  }, []);

  // Handle mouse movement to show/hide controls
  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    if (controlsTimeout) clearTimeout(controlsTimeout);

    const timeout = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2000);
    setControlsTimeout(timeout);
  }, [isPlaying, controlsTimeout]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div
      ref={containerRef}
      tabIndex={-1}
      className="relative w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >

      <div className="relative aspect-video w-full overflow-hidden rounded-[20px] border border-white/10 bg-[#02040a] shadow-2xl group">

        {/* Video Container */}
        {provider === "vimeo" && (
          <div
            ref={iframeRef as React.RefObject<HTMLDivElement>} // Vimeo player attaches to a div
            className="h-full w-full"
          />
        )}

        {/* Legacy/Fallback Providers */}
        {provider === "youtube" && (
          <iframe
            ref={iframeRef}
            key={sanitizedEmbedSrc}
            src={sanitizedEmbedSrc}
            title="RoofFlow VSL"
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            className="h-full w-full"
            sandbox="allow-scripts allow-same-origin allow-presentation"
          />
        )}

        {/* Gate Overlay */}
        {!gateOpen && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="group/play relative flex items-center justify-center">
              <div className="absolute inset-0 animate-ping rounded-full bg-white/20 opacity-0 group-hover/play:opacity-100 duration-1000" />
              <Button
                size="icon"
                className="relative h-20 w-20 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
                onClick={() => {
                  analyticsRef.current.clear();
                  setGateOpen(true);
                }}
              >
                <Play className="h-8 w-8 fill-current" />
              </Button>
            </div>
          </div>
        )}

        {/* Custom Controls Overlay */}
        {gateOpen && provider === "vimeo" && (
          <div
            className={cn(
              "absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300",
              showControls ? "opacity-100" : "opacity-0"
            )}
          >
            {/* Center Play/Pause (optional, maybe just bottom bar is enough, but user likes premium feel) */}
            {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {!isPlaying && <Play className="w-16 h-16 text-white/50" />}
                </div> */}

            <div className="p-4 space-y-2">
              {/* Progress Bar */}
              {/* User said "minimum stuff", maybe hide progress bar if unskippable? 
                        "we should have, you know, the play button. We should have, like, the actual, uh, the, we can say, you know, the sound... full screen button and, uh, quality button"
                        User also said "they cannot get to the actual YouTube channel, they cannot share it, they cannot do a lot of things"
                        "Unskippable mode" implies maybe no seeking? 
                        But usually a progress bar is expected. I'll add it but maybe make it non-interactive if strict unskippable is needed. 
                        For now, I'll make it interactive for UX, but visually minimal.
                    */}
              {/* <Slider 
                        value={[progress]} 
                        max={100} 
                        step={0.1}
                        className="cursor-pointer"
                        onValueChange={(val) => {
                            // Seek logic here if allowed
                        }}
                    /> */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button onClick={togglePlay} className="text-white hover:text-accent transition-colors">
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </button>

                  <div className="flex items-center gap-2 group/vol">
                    <button onClick={toggleMute} className="text-white hover:text-accent transition-colors">
                      {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </button>
                    <div className="w-0 overflow-hidden group-hover/vol:w-24 transition-all duration-300">
                      <Slider
                        value={[isMuted ? 0 : volume]}
                        max={1}
                        step={0.01}
                        onValueChange={handleVolumeChange}
                        className="w-20"
                      />
                    </div>
                  </div>

                  <span className="text-xs text-white/70 font-mono">
                    {formatTime(duration * (progress / 100))} / {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Quality Selector - Placeholder as Vimeo API requires Pro for quality */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-white hover:text-accent transition-colors">
                        <Settings className="h-5 w-5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-black/90 border-white/10 text-white">
                      <DropdownMenuItem onClick={() => { }}>Auto</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => { }}>1080p</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => { }}>720p</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <button onClick={toggleFullscreen} className="text-white hover:text-accent transition-colors">
                    {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default VslPlayer;
