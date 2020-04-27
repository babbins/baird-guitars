import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerEditorComponent({
  id: "youtube",
  label: "Youtube",
  fields: [{ name: "url", label: "Video URL", widget: "string" }],
  pattern: /^youtube:(\S+)$/,
  fromBlock: function(match) {
    return {
      url: match[1],
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return `\`youtube: ${obj.url}\``;
  },
  toPreview: function(obj) {
    return (
      '<img src="http://img.youtube.com/vi/' +
      obj.id +
      '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  },
});

CMS.registerPreviewTemplate("index", IndexPagePreview);
