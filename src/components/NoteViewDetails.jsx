import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import Loading from './Loading';
import UseAxiosPublic from '../hooks/UseAxiosPublic';
import { toast } from 'react-toastify';

const NoteViewDetails = ({ tradesOnDate, closeModal }) => {

    const [editorContents, setEditorContents] = useState([]);
    const [loading, setLoading] = useState(false);
    const axiosPublic = UseAxiosPublic();

    useEffect(() => {
        // Initialize the editor contents with HTML from tradesOnDate
        const initialContents = tradesOnDate.map(trade => {
            const htmlContent = `
                <div>
                    <h3>${trade?.name}</h3>
                    <p><strong>Date:</strong> ${trade?.date}</p>
                    <p><strong>Condition:</strong> ${trade?.condition}</p>
                    <p><strong>Entry Price:</strong> ${trade?.entryPrice}</p>
                    <p><strong>Exit Price:</strong> ${trade?.exitPrice}</p>
                    <p><strong>PnL:</strong> ${trade?.pnl}</p>
                    <p><strong>Volume:</strong> ${trade?.volume}</p>
                    <p><strong>Note:</strong> ${trade?.note}</p>
                    ${trade?.tradingImage && trade?.tradingImage.length > 0 ? trade?.tradingImage.map(imageUrl => `<img src="${imageUrl}" alt="Trade Image" style="max-width: 100%;" />`).join('') : ''}
                </div>
                <hr />
            `;
            return { id: trade._id, content: htmlContent }; // Ensure content is in HTML format
        });

        setLoading(true);
        setEditorContents(initialContents);
        setLoading(false);
    }, [tradesOnDate]);

    const handleContentChange = (content, index) => {
        const updatedContents = [...editorContents];
        updatedContents[index].content = content; // Ensure content is managed as HTML
        setEditorContents(updatedContents);
    };

    const handleSave = async (index) => {
        try {
            const tradeId = editorContents[index].id; // Get the trade ID
            const updatedContent = editorContents[index].content; // Get the updated content

            // Ensure you're sending the HTML content to your backend
            const response = await axiosPublic.put(`/update-note/${tradeId}`, {
                content: updatedContent,
            });

            if (response.status === 200) {
                toast.success(response?.data?.message);
                closeModal(); // Close the modal if save is successful
            } else {
                toast.error('Failed to update the note');
            }
        } catch (error) {
            console.error('Error saving note:', error);
            toast.error('Error saving note');
        }
    };

    return (
        <div className='my-10 text-black w-full overflow-x-auto'>
            {loading ? (
                <Loading />
            ) : (
                editorContents.map((editorContent, index) => (
                    <div key={editorContent.id} className='mb-6'>
                        <ReactQuill
                            value={editorContent.content}
                            onChange={(content) => handleContentChange(content, index)}
                            modules={{
                                toolbar: [
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' },
                                    { 'indent': '-1' }, { 'indent': '+1' }],
                                    ['link', 'image', 'video'],
                                    ['clean']
                                ],
                            }}
                            formats={[
                                'header', 'font', 'size',
                                'bold', 'italic', 'underline', 'strike', 'blockquote',
                                'list', 'bullet', 'indent',
                                'link', 'image', 'video'
                            ]}
                            placeholder="Write something awesome..."
                        />

                        <button
                            onClick={() => handleSave(index)}
                            className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
                        >
                            Save
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default NoteViewDetails;
