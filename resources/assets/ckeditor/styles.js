/**
 * Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

// This file contains style definitions that can be used by CKEditor plugins.
//
// The most common use for it is the "stylescombo" plugin, which shows a combo
// in the editor toolbar, containing all styles. Other plugins instead, like
// the div plugin, use a subset of the styles on their feature.
//
// If you don't have plugins that depend on this file, you can simply ignore it.
// Otherwise it is strongly recommended to customize this file to match your
// website requirements and design properly.

CKEDITOR.stylesSet.add('default', [
		/* Block Styles */

		// These styles are already available in the "Format" combo ("format" plugin),
		// so they are not needed here by default. You may enable them to avoid
		// placing the "Format" combo in the toolbar, maintaining the same features.
		/*
		{ name: 'Paragraph',		element: 'p' },
		{ name: 'Heading 1',		element: 'h1' },
		{ name: 'Heading 2',		element: 'h2' },
		{ name: 'Heading 3',		element: 'h3' },
		{ name: 'Heading 4',		element: 'h4' },
		{ name: 'Heading 5',		element: 'h5' },
		{ name: 'Heading 6',		element: 'h6' },
		*/
		{ name: 'print-ol',element: 'ol',attributes: {
		 		class:'print-ol'
			} 
		},

		{ name: 'print-ol-small',element: 'ol',attributes: {
		 		class:'print-ol-small'
			} 
		},

		{ name: 'print-p-indent',element: 'p',attributes: {
		 		class:'print-p-indent'
			} 
		},

		{ name: 'fa-ul-check', element: 'ul',attributes: {
		 		class:'fa-ul print-fa-check',
			} 
		},

		{ name: 'fa-ul-arrow', element: 'ul',attributes: {
		 		class:'fa-ul print-fa-arrow',
			} 
		},

		{ name: 'Marker',element: 'marker' },
		{ name: 'Preformatted Text',element: 'pre' },
		{ name: 'Address',			element: 'address' },
		
		{ name: 'Big',				element: 'big' },
		{ name: 'Small',			element: 'small' },
		{ name: 'Typewriter',		element: 'tt' },

		{ name: 'Computer Code',	element: 'code' },
		{ name: 'Keyboard Phrase',	element: 'kbd' },
		{ name: 'Sample Text',		element: 'samp' },
		{ name: 'Variable',			element: 'var' },

		{ name: 'Deleted Text',		element: 'del' },
		{ name: 'Inserted Text',	element: 'ins' },

		{ name: 'Cited Work',		element: 'cite' },
		{ name: 'Inline Quotation',	element: 'q' },
	 
		{ name: 'Span',	element: 'span' },

	{name: CKEDITOR.lang[window.admin.locale].sourcearea.toolbar, element: 'p', styles: {'font-style': 'italic', 'text-align': 'right'}}
]);

