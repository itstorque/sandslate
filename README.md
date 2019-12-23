# sandslate
A Minimal Portfolio Theme for Jekyll Sites


## Theme Properties & Customization

### Color Theme

The theme's default color scheme is the light-mode theme, however, this can be changed in the site's settings in `_config.yml` to be in dark mode as such:

```ruby
color_mode: dark
```

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
