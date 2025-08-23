interface HomeCardProps {
    title: string;
    body: string;
}


function HomeCard({title, body}: HomeCardProps) {
    return (
        <div>
            <div className="flex items-center justify-center text-4xl pt-3 lg:px-11">
                {title}
            </div>
            <div className="flex grow text-2xl lg:px-11 py-11 font-light items-center justify-center">
                {body}
            </div>
        </div>
    )
}

export default HomeCard
