# frozen_string_literal: true

# -----------------------------------------------------------------------------
# Gemfile for LOCAL development of this GitHub Pages (Jekyll) site.
# -----------------------------------------------------------------------------
# The live site is built by GitHub Pages at https://ford153focus.github.io.
# That service uses the `github-pages` gem, which pins Jekyll and its
# dependencies to the exact versions deployed to GitHub Pages.
#
# Using that same gem locally guarantees that `bundle exec jekyll serve` /
# `bundle exec jekyll build` reproduce the deployed output as closely as
# possible.
#
# Docs:
#   https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll
#   https://jekyllrb.com/docs/
# -----------------------------------------------------------------------------

source "https://rubygems.org"

# The `github-pages` gem pulls in Jekyll + the core pages plugins at the exact
# versions used by the GitHub Pages publish service. Declaring it inside the
# `:jekyll_plugins` group makes `bundle exec jekyll serve` auto-load it.
gem "github-pages", group: :jekyll_plugins

# First-party, Pages-supported Jekyll plugins. Keep these aligned with what the
# deployed site uses. (This site ships its own hand-rolled feed.xml compatibility
# layer, so these are optional conveniences for local plugin parity.)
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-seo-tag", "~> 2.8"
end

# -----------------------------------------------------------------------------
# Gems required ONLY for LOCAL development.
# -----------------------------------------------------------------------------
# These are never deployed: GitHub Pages ignores `_plugins/` and only installs
# the gems it ships. But they are needed to build this site on your own machine.

# WEBrick stopped shipping with Ruby in 3.0, and `jekyll serve` needs it to run
# the local web server. Run `bundle add webrick` on Ruby >= 3.0, or keep it
# declared here.
gem "webrick", "~> 1.8"

# Dependencies of the custom converters in `_plugins/`:
#   * HamlConverter.rb  -> require 'haml'  (HAML template engine, .haml files)
#   * SassConverter.rb  -> require 'sass'  (classic Sass, Sass::Engine, .scss)
gem "haml", ">= 5.0"
gem "sass", ">= 3.0"

# -----------------------------------------------------------------------------
# NOTE about Ruby compatibility:
# The GitHub docs recommend Ruby 3.1.x or earlier for the `github-pages` gem.
# On Ruby >= 3.2 you may hit gem/method compatibility errors. This environment
# is Ruby 3.2.2, so if `bundle install` fails, install Ruby 3.1.x first, then
#   bundle install
#   bundle exec jekyll serve --baseurl=""
# and open http://localhost:4000
# -----------------------------------------------------------------------------
