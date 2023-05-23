
const Contact = () => {
    return (
        <div
            name="Contact"
            className=""
        >

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/369219b4-c72c-42d8-9b1e-34ba3a0fb2c2"
                        method="POST"
                        className=" flex flex-col w-full md:w-1/2"

                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your E-mail"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
                        />
                        <textarea
                            required
                            name="messege"
                            rows="10"
                            className="p-2 border-2 bg-transparent rounded-md text-slate-50 focus:outline "
                        ></textarea>
                        <button className="text-white bg-gradient-to-l from-yellow-500 to-cyan-500 py-3 px-6 my-8 rounded-md mx-auto flex item-center">
                            Lets talk
                        </button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Contact