import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();
    console.log(data);

    const book = data.find(book => book.bookId === id);
    const { bookName, author, review, image, totalPages, publisher, yearOfPublishing, rating, tags, category } = book;

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="rounded-lg bg-gray-300 p-16 h-[564px]"
                />
                <div className="space-y-4 h-[564px]">
                    <h1 className="text-4xl font-bold">{bookName}</h1>
                    <p>By: {author}</p>
                    <div className="border-b border-dashed"></div>
                    <p>{category}</p>
                    <div className="border-b border-dashed"></div>
                    <p className="work-sans text-sm">
                       <span className="playfair-display">Review</span> : {review}
                    </p>
                    <div className="flex">
                        <p className="pr-5">Tag</p>
                        {
                            tags.map(tag => <div className="badge text-[#23BE0A] bg-[#22be0a14] mr-2">{tag}</div>)
                        }
                    </div>
                    <div className="border-b border-dashed"></div>
                    <div className="work-sans grid grid-cols-2">
                        <p>Total pages:</p>
                        <p>{totalPages}</p>
                    </div>
                    <div className="work-sans grid grid-cols-2">
                        <p>Publisher:</p>
                        <p>{publisher}</p>
                    </div>
                    <div className="work-sans grid grid-cols-2">
                        <p>Year Of Publishing:</p>
                        <p>{yearOfPublishing}</p>
                    </div>
                    <div className="work-sans grid grid-cols-2">
                        <p>Rating:</p>
                        <p>{rating}</p>
                    </div>
                    
                    <button className="btn btn-outline btn-success mr-4 text-black">Read</button>
                    <button className="btn btn-info text-white">Wishlist</button>
                    
                </div>
            </div>
        </div>
    );
};

export default BookDetails;