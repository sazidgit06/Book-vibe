import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, image, author, tags, category, rating } = book;
    return (
        <Link to={`books/${bookId}`}>
            <div className="card bg-base-100 border p-6">
                <figure className="py-8 bg-[#F3F3F3] rounded-xl">
                    <div className="tooltip tooltip-bottom work-sans cursor-pointer" data-tip="Click for details">
                        <img
                            src={image}
                            className="h-[166px] object-cover"
                            alt={bookName} />
                    </div>
                </figure>
                <div className="space-y-4">
                    <div className="space-x-2 mt-2">
                        {
                            tags.map(tag => <div className="badge text-[#23BE0A] bg-[#22be0a14]">{tag}</div>)
                        }

                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p className="work-sans">By: {author}</p>
                    <div className="border border-dashed"></div>
                    <div className="card-actions justify-between">
                        <p className="work-sans">{category}</p>
                        <div className="flex gap-3">
                            <p className="work-sans">{rating}</p>
                            <img className="w-[20px] h-[20px]" src="https://img.icons8.com/ios/50/star--v1.png" alt="star--v1" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;