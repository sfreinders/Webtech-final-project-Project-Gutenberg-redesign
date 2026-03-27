# Webtech-final-project-Project-Gutenberg-redesign

# **Documentation:**
Made by:

Da Silva Conde Victoria, Nathanael

Reinders, Sofie

Koster, Mischa


It was important for us to maintain the original iconic feel of the Project Gutenberg website, which meant a roughly similar color palette, together with a similar but modernized lay-out.
We felt that the original website primarily felt old trough it’s outdated icons and logo’s, and secondly, we found several user issues with the general layout of the page. 

We first modernized the header, added a new logo, and switched the two tone blue for a cleaner white. We did keep the original blue via a small border at the bottom of the header, and we removed the Paypal icon, which was severely outdated.
Secondly, we changed the layout of the main landing page. 

It felt unnatural and also unnecessary to start with the newest releases, and so we  swapped those over for the most popular section, as it is most likely that the user would connect with a highly popular book, rather than a more niche and unknown “new release”. Beneath that we implemented the option to choose for a specific category, which was previously near the bottom of the page. We feel this would allow the user to directly dive into a section of books matching their preference, and thus further spike their interest in the website and improve user experience. 

Beneath that we kept the two infobox sections, containing useful and important information about the website and its ebooks, for example emphasizing that all ebooks are free, which we feel is important for the user to know. This is followed up by the “newest release” section, which used to be at the top. We removed 2 of the infoboxes near the bottom, the social media and the special pages sections, as we implemented these in the footer.

The footer has also been modernized, we added the special pages directly to the footer so the user could always access them, regardless of what page they may be on, and we also divided all links up in sections, split into: About Project Gutenberg, Legal, Help and Follow us, which is where we implemented the social media of Project Gutenberg.

The rows of books, both the popular and the newest release section, are made to slide. Secondly a special button appears on the bottom right of the screen, with an arrow pointing upwards, allowing the user to go back to the top without having to manually scroll up again. These two features were implemented by Sofie using our main.js script. 

The About Project Gutenberg page was also transformed. Since this page is partly dedicated to the founder, Michael Hart, we only found it fitting to add a picture of him. Secondly, the mission statement was enlarged and made as the same gold color as can be found on the homepage, putting more emphasis on the statement itself.

The Frequently download page was also improved. We felt that a top 100 (per category) was simply unnecessary and even annoying. This was simplified into a top 10 instead, further modernizing the page and minimalizing what we previously experienced as clutter. 

The main categories page was also modernized, the previously plain rows have now been replaced with card grids, where each category is a clickable card that highlights on hover. On the reading list page, the collection section was replaced with clean buttons that are compact and easy to navigate. For the bookshelf section we needed a smarter layout solution. We tried CSS columns first, but that broke the alphabetical order because it filled top to bottom instead of left to right. So we solved it with a JavaScript masonry function that calculates the shortest column and places each box there so there are no gaps in between the boxes, a bit like how Pinterest works. This function runs automatically on both the main categories page and the reading list page.

Advanced search section
The subheadings of Most Popular, New Releases and Random Suggestions have been updated to stay in line with the more modern look of the page, with them being in a box which gets highlighted when hovered over.

The individual book page was also modernized, although we aimed to keep the original feel. Firstly, the cover image of the book has been enlarged, and secondly the tables were modernized. The similar books section was moved towards the bottom, as this felt more natural.

Lastly, the navbar navigation was significantly improved. The user can now see what page they are on, as the navbar will highlight said page, further improving the user experience and website functionality.


# **Timeline:**

**23 March:**
Top 100 changed to top 10 -Nathanael

Changed Hrefs between pages -Nathanael

**24 March:**
Logo created and changed, color is now  #fefefe - Mischa

HTML change: paypal donation button removed -Mischa

HTML change: on main landing page, header and logo wrapped together to enable centering -Mischa


**25 March:**
Implementation of main.js, book slider and “back to top” arrow button and corrected it on every html and css - Sofie

Moved html around on main landing page to change the order of top to bottom, text centered, implemented “what do you want to read” for increased user ease. Social media section simplified - Mischa

Redesigned footer across all pages, removed 2 infoboxes (from html also). -Mischa

Redesigned about page, made quote look nice, added picture of founder. -Mischa
Bron foto about page: https://brewster.kahle.org/2011/09/07/michael-hart-of-project-gutenberg-passes/

Changed more hrefs -Nathanael

Attempt at making dark mode -Nathanael

Highlighted the current page user is on -Nathanael


**26 March:**
Redesigned main categories page: replaced nested &lt;/ul&gt; list with CSS grid card layout for a better scannability- Sofie

Redesigned reading list page: replaced nested &lt;/ul&gt; bookshelves with flexbog tag -sofie

Redesigned collections section on reading list page: replaced separate &lt;/ul&gt; block with flexbox pill layout - Sofie

Changed the hrefs to make sure the active nav link works on every page and make it visible where you are in the navbar.  -sofie
https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout

Converted the bookshelves layout from columns to a Javascript masonry solution, this makes sure the alphabetical order is correct -sofie

Adden word-break: break-word to css so long titles wrap neatly inside box instead of overflowing - sofie 

A lay-out update for advanced search, the red texts at the top have been moved into bubbles -Nathanael

Updated most frequently downloaded page, same style as the main categories page, and gave the table a cleaner look - Nathanael

Modernized “The little review” book page. Moved similar book section to bottom, modernized tables and increased book cover size - Mischa

