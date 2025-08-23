function Header() {
    return (
        <div className="grid grid-cols-1 justify-items-center m-2">
            <h1 className="font-sans font-extrabold text-4xl mb-2">
                Job Board
            </h1>
            <p className="font-sans text-base text-gray-600 max-w-md text-center">
                An easy-to-use job board.
            </p>
        </div>
    )
}

export default Header