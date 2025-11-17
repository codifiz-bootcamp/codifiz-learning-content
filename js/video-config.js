const videoConfig = {
  // Pre-work (update after recording optional support sessions)
  'week-4-day1': {
    platform: 'youtube',
    videoId: '',  // Add after recording
    duration: '',
    recordedDate: '',
    instructor: ''
  },
    'week-4-day2': {
    platform: 'youtube',
    videoId: '',  // Add after recording
    duration: '',
    recordedDate: '',
    instructor: ''
  },
    'week-4-day3': {
    platform: 'youtube',
    videoId: '',  // Add after recording
    duration: '',
    recordedDate: '',
    instructor: ''
  },
    'week-4-day4': {
    platform: 'youtube',
    videoId: '',  // Add after recording
    duration: '',
    recordedDate: '',
    instructor: ''
  },
    'week-4-day5': {
    platform: 'youtube',
    videoId: '',  // Add after recording
    duration: '',
    recordedDate: '',
    instructor: ''
  },
  
  // Bootcamp (update after each live class)
  'week-1-day1': {
    platform: 'youtube',
    videoId: 'ABC123',  // ← Just add this after recording!
    duration: '6h 15m',
    recordedDate: 'November 15, 2024',
    instructor: 'John Smith',
    chapters: [
      { time: '0:00', title: 'Introduction' },
      { time: '45:00', title: 'Live Coding' },
      { time: '3:30:00', title: 'Lab Time' }
    ]
  }
  // ... all other days
};

// Auto-load function
function loadVideo() {
  const pageId = document.body.dataset.lessonId;
  const config = videoConfig[pageId];
  if (!config || !config.videoId) return;
  
  document.getElementById('videoPlaceholder').style.display = 'none';
  const embed = document.getElementById('youtubeEmbed');
  embed.style.display = 'block';
  embed.querySelector('iframe').src = 
    `https://www.youtube.com/embed/${config.videoId}`;
}

document.addEventListener('DOMContentLoaded', loadVideo);