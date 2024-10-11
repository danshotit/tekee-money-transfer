import moviepy.editor as mp

# Load video and audio files
video_clip = mp.VideoFileClip("video.mp4")
audio_clip = mp.AudioFileClip("audio.wav")

# Synchronize audio with video
synchronized_audio = audio_clip.set_duration(video_clip.duration)

# Merge synchronized audio with video
final_clip = video_clip.set_audio(synchronized_audio)

# Export final synchronized video
final_clip.write_videofile("output.mp4")
