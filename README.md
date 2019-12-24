# Sandslate
A Minimal Portfolio Theme for Jekyll Sites.

Sandslate is a customizable light-weight minimal theme you can use on your jekyll site, whether you are hosting on GitHub or your own servers.
Whether you want a minimal personal portfolio to showcase your work, log your journeys or put your art on, Sandslate is an awesome theme you can use to spice up that portfolio easily.

Preview the theme on Sandslate's official page: [tareqdandachi.github.io/sandslate](https://tareqdandachi.github.io/sandslate/).

## Theme Properties & Customization

### Color Theme

The theme's default color scheme is the light-mode theme, however, this can be changed in the site's settings in `_config.yml` to be in dark mode as such:

```ruby
color_mode: dark
```

The allowed values are `light` and `dark`, otherwise it will default to light-mode.

### Alignment

Changing the alignment of the site affect where the navigation sidebar is and some behavior of the content to match a right-aligned theme.
A right-aligned theme can be chosen for aesthetic purposes, standing out and/or better support for right-to-left languages.


#### Site Definition:

You can change your whole site's alignment in `_config.yml` by adding:
```ruby
right_aligned: true
```
By default, the property is set to `false`, meaning that it should be left aligned.

#### Page Definition:

You can also overwrite the site definition by changing the `alignment` parameter of a page in its front-matter. If left undefined or defined incorrectly, it will default to the site definition of alignment.

The valid values for the alignment parameter are `'left'` and `'right'`, otherwise it will default to the site definition. Here is an example of what front-matter with a page defined alignment might look like:

```ruby
title: Home
layout: home
alignment: left
```

## Customizing content

### Multiple Columns of Text

This theme support putting text (`<p>` tags) into multiple columns on devices that have a large enough window width.
This mainly means laptops and tablets will view them as multiple columns while mobile devices preview it as one block of text.

To do so you can add the class `multicols` or `multicols3` to your text. `multicols` results in the paragraph being seperated into 2 equal width columns, while `multicols3` splits them into 3 columns.

#### Add class to Markdown

To add this class to markdown, you can add `{:.multicols}` to the beginning of the paragraph:

```Markdown
{:.multicols}
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

#### Add class to HTML

You add this class to HTML the same way you add any class to a tag.

```HTML
<p class="multicols">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

### Embedding Images
