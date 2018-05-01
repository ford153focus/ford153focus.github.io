module Jekyll
    class ImgWrapper < Liquid::Tag

      def initialize(tag_name, text, tokens)
        super
        @text = text
      end

      def render(context)
        "<a href='#{@text.split[0]}'><img src='#{@text.split[0]}' width='#{@text.split[1]}px' height='#{@text.split[2]}px'></a>"
      end
    end
  end

  Liquid::Template.register_tag('img2', Jekyll::ImgWrapper)
