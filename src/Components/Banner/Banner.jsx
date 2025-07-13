import bannerImg from "../../assets/books.jpg"
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="">
                    <h1 className="text-4xl font-bold mb-8">Books to freshen up your bookshelf!</h1>
                    <button className="btn bg-[#23BE0A] text-white">View the list</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;