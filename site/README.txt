KAMAL'S PORTFOLIO SITE: HOW TO FINISH IT
=========================================
1. Add your photo:        images/profile.jpg  (head-and-shoulders, plain background)
2. Add gallery photos:    images/gallery/1.jpg ... 6.jpg (only with consent of people in them)
3. Fill the yellow placeholders: open each .html file in a text editor (VS Code) and search for  class="todo"
   Replace each yellow bit with your own words, then delete the surrounding <span class="todo"> ... </span> tags.
4. Self-projection video: upload to YouTube as Unlisted, then in index.html set data-yt="" to the video ID
   (the part after v= in the link).
5. Before publishing run:   grep -l 'class="todo"' *.html   -> should print nothing.
6. Preview locally: double-click index.html (a badge shows how many placeholders are left).
