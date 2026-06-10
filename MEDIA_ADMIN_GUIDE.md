# Media Management Guide for Pastor

## How to Add/Edit Media Content

### Step 1: Access the Admin Panel

1. Go to your website: `https://fegbogun.com/admin/media`
2. Enter the admin password: `pastor2024`
3. You'll see the media management dashboard

### Step 2: Upload Your Files to Cloud Storage First

Before adding media to the website, you need to upload your files to free cloud storage and get shareable links.

#### For Audio Files:

**Option 1: Google Drive (Recommended)**
1. Go to https://drive.google.com
2. Click **"New"** → **"File upload"**
3. Upload your audio file (MP3, WAV, etc.)
4. Right-click the uploaded file → **"Get link"**
5. Change to **"Anyone with the link"** → Click **"Copy link"**
6. Use this link in the admin panel

**Option 2: SoundCloud**
1. Go to https://soundcloud.com
2. Upload your audio
3. Click **"Share"** → Copy the link
4. Use this link in the admin panel

#### For Images:

**Option 1: Imgur (Recommended - Easiest)**
1. Go to https://imgur.com
2. Click **"New post"**
3. Upload your image
4. Right-click the image → **"Copy image address"**
5. Use this link in the admin panel

**Option 2: Google Photos**
1. Go to https://photos.google.com
2. Upload your image
3. Click the image → Click **"Share"** → **"Create link"**
4. Copy the link
5. Use this link in the admin panel

#### For Videos:

**YouTube Only**
1. Upload your video to YouTube
2. Go to your video page
3. Copy the video ID from the URL
   - Example: `https://www.youtube.com/watch?v=ABC123xyz`
   - The ID is: `ABC123xyz`

### Step 3: Add Content to Admin Panel

#### Adding Videos (YouTube)
1. Click the **"Videos"** tab
2. Click **"Add Video"** button
3. Fill in:
   - **Video Title**: Name of the sermon/video
   - **YouTube Video ID**: Just the ID (e.g., `ABC123xyz`)
   - **Duration**: Video length (e.g., "15:30")
4. Click **"Download & Save"**

#### Adding Audio Files
1. **First upload your audio to Google Drive or SoundCloud** (see Step 2 above)
2. Click the **"Audio"** tab
3. Click **"Add Audio"** button
4. Fill in:
   - **Audio Title**: Name of the teaching/episode
   - **Audio URL**: Paste the link from Google Drive or SoundCloud
   - **Duration**: Audio length (e.g., "30:00")
5. Click **"Download & Save"**

#### Adding Images
1. **First upload your image to Imgur or Google Photos** (see Step 2 above)
2. Click the **"Images"** tab
3. Click **"Add Image"** button
4. Fill in:
   - **Image Title**: Description of the image
   - **Image URL**: Paste the link from Imgur or Google Photos
5. You'll see a preview of the image
6. Click **"Download & Save"**

### Step 4: Send File to Developer

After clicking **"Download & Save"**:
1. A file named `media-content.json` will download to your computer
2. **Send this file to your web developer**
3. They will update the website
4. Changes will appear on the live site within minutes!

### Quick Tips

**For YouTube Videos:**
- Only need the video ID, not the full URL
- Example: From `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Use only: `dQw4w9WgXcQ`

**For Audio Files:**
- Google Drive is easiest and free (15GB storage)
- Make sure link sharing is set to "Anyone with the link"

**For Images:**
- Imgur is the easiest - no account needed
- Just upload and copy the image link
- Images are free and unlimited

### Deleting Content

- Click the **"Delete"** button on any item to remove it
- Remember to click **"Download & Save"** after deleting
- Send the new file to your developer

### Security Note

- Keep the admin password (`pastor2024`) private
- Only access the admin panel from trusted devices
- You can change the password by asking your developer

### Need Help?

Contact your web developer if you need assistance with:
- Changing the admin password
- Getting shareable links from cloud storage
- Technical issues

### Troubleshooting

**Image not showing?**
- Make sure you copied the **direct image link** from Imgur
- For Google Photos, the link must be public

**Audio not playing?**
- Make sure the Google Drive link is set to "Anyone with the link"
- For SoundCloud, use the share link

**Video not showing?**
- Make sure you only use the video ID, not the full URL
- Video must be public on YouTube
