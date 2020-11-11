module Jekyll
    class FontAwesomeShortTag < Liquid::Tag

      def initialize(tag_name, text, tokens)
        super
        @text = text
      end

      def render(context)
        "<i class='fa fa-#{@text}' aria-hidden='true'></i>"
      end
    end
  end

  Liquid::Template.register_tag('fa', Jekyll::FontAwesomeShortTag)
