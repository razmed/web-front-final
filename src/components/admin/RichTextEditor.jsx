import React, { useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Image } from '@tiptap/extension-image';
import { Link } from '@tiptap/extension-link';
import { TextAlign } from '@tiptap/extension-text-align';
import { Underline } from '@tiptap/extension-underline';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { Highlight } from '@tiptap/extension-highlight';
import { Typography } from '@tiptap/extension-typography';
import { Placeholder } from '@tiptap/extension-placeholder';
import Dropcursor from '@tiptap/extension-dropcursor';
import './RichTextEditor.css';

const RichTextEditor = ({ value, onChange, placeholder = "Contenu de l'article..." }) => {
  const fileInputRef = useRef(null);

  // Configuration étendue de l'extension Image avec gestion d'upload
  const CustomImage = Image.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        src: {
          default: null,
        },
        alt: {
          default: null,
        },
        title: {
          default: null,
        },
        width: {
          default: null,
        },
        height: {
          default: null,
        },
        style: {
          default: 'max-width: 100%; height: auto; display: block; margin: 1rem 0;',
        },
      };
    },
    
    addCommands() {
      return {
        ...this.parent?.(),
        setImage: (options) => ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              ...options,
              style: 'max-width: 100%; height: auto; display: block; margin: 1rem 0;'
            },
          });
        },
      };
    },
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      CustomImage.configure({
        inline: false,
        allowBase64: true,
        HTMLAttributes: {
          class: 'editor-image',
          loading: 'lazy',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph', 'image'],
        alignments: ['left', 'center', 'right', 'justify'],
      }),
      Underline,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Typography,
      Placeholder.configure({
        placeholder,
      }),
      Dropcursor.configure({
        color: '#3b82f6',
        width: 3,
      }),
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] p-4',
      },
      handleDrop: (view, event, slice, moved) => {
        if (!moved && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) {
          const files = event.dataTransfer.files;
          
          Array.from(files).forEach((file) => {
            if (file.type.startsWith('image/')) {
              const reader = new FileReader();
              
              reader.onload = (e) => {
                const pos = view.posAtCoords({
                  left: event.clientX,
                  top: event.clientY,
                });
                
                if (pos) {
                  editor.chain().focus()
                    .setImage({ src: e.target.result, alt: file.name })
                    .run();
                }
              };
              
              reader.readAsDataURL(file);
            }
          });
          
          return true;
        }
        return false;
      },
      handlePaste: (view, event) => {
        const items = event.clipboardData?.items;
        
        if (items) {
          for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
              event.preventDefault();
              const file = items[i].getAsFile();
              
              if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                  editor.chain().focus()
                    .setImage({ src: e.target.result, alt: file.name })
                    .run();
                };
                reader.readAsDataURL(file);
              }
              
              return true;
            }
          }
        }
        
        return false;
      },
    },
  });

  const handleImageUpload = (e) => {
    const files = e.target.files;
    
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          
          reader.onload = (event) => {
            editor?.chain().focus().setImage({
              src: event.target.result,
              alt: file.name,
              title: file.name,
            }).run();
          };
          
          reader.onerror = () => {
            alert('Erreur lors du chargement de l\'image');
          };
          
          reader.readAsDataURL(file);
        } else {
          alert('Veuillez sélectionner un fichier image valide');
        }
      });
    }
    
    // Reset input
    e.target.value = '';
  };

  const addImageFromUrl = () => {
    const url = prompt('URL de l\'image:');
    
    if (url) {
      editor?.chain().focus().setImage({ src: url, alt: 'Image' }).run();
    }
  };

  if (!editor) {
    return <div>Chargement de l'éditeur...</div>;
  }

  return (
    <div className="rich-text-editor">
      <div className="editor-toolbar">
        {/* Formatting */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
            title="Gras (Ctrl+B)"
          >
            <strong>B</strong>
          </button>
          
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
            title="Italique (Ctrl+I)"
          >
            <em>I</em>
          </button>
          
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'is-active' : ''}
            title="Souligné (Ctrl+U)"
          >
            <u>U</u>
          </button>
          
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
            title="Barré"
          >
            <s>S</s>
          </button>
        </div>

        {/* Headings */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
            title="Titre 1"
          >
            H1
          </button>
          
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            title="Titre 2"
          >
            H2
          </button>
          
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
            title="Titre 3"
          >
            H3
          </button>
        </div>

        {/* Lists */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
            title="Liste à puces"
          >
            • List
          </button>
          
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
            title="Liste numérotée"
          >
            1. List
          </button>
        </div>

        {/* Alignment */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
            title="Aligner à gauche"
          >
            ⬅
          </button>
          
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
            title="Centrer"
          >
            ↔
          </button>
          
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
            title="Aligner à droite"
          >
            ➡
          </button>
        </div>

        {/* Images */}
        <div className="toolbar-group">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Ajouter une image depuis votre ordinateur"
          >
            🖼️ Image
          </button>
          
          <button
            type="button"
            onClick={addImageFromUrl}
            title="Ajouter une image depuis une URL"
          >
            🔗 URL
          </button>
        </div>

        {/* Link */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => {
              const url = prompt('URL du lien:');
              if (url) {
                editor.chain().focus().setLink({ href: url }).run();
              }
            }}
            className={editor.isActive('link') ? 'is-active' : ''}
            title="Ajouter un lien"
          >
            🔗 Lien
          </button>
          
          {editor.isActive('link') && (
            <button
              type="button"
              onClick={() => editor.chain().focus().unsetLink().run()}
              title="Supprimer le lien"
            >
              ❌ Lien
            </button>
          )}
        </div>

        {/* Table */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
            title="Insérer un tableau"
          >
            📊 Tableau
          </button>
        </div>

        {/* Clear Formatting */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
            title="Effacer le formatage"
          >
            🧹 Clear
          </button>
        </div>

        {/* Undo/Redo */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            title="Annuler (Ctrl+Z)"
          >
            ↶ Undo
          </button>
          
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            title="Rétablir (Ctrl+Y)"
          >
            ↷ Redo
          </button>
        </div>
      </div>

      <EditorContent editor={editor} />
      
      <div className="editor-info">
        <small>
          💡 Vous pouvez glisser-déposer des images directement dans l'éditeur ou coller depuis le presse-papiers
        </small>
      </div>
    </div>
  );
};

export default RichTextEditor;
