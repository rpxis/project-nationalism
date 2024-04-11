import './AsideVideos.css'

const AsideVideos = () => {
    return (
        <aside className='side-right'>
            <span className="title-aside">
                Canções
            </span>

            <div className="all-videos">
                <div className="container-video">
                    <iframe src="https://www.youtube.com/embed/JzByVhWju88?si=UkDE7La5Ml6MjlMQ&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="container-video">
                    <iframe src="https://www.youtube.com/embed/y68mlZ6X2v0?si=F0OfekElPnAWbJD2&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="container-video">
                    <iframe src="https://www.youtube.com/embed/9VGSU1GIxaU?si=I69GiUBwLhp5GM3k&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="container-video">
                    <iframe src="https://www.youtube.com/embed/kCUZr_K8et8?si=mMBwLR4Xu_Ar_VLk&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

        </aside>
    )
}

export default AsideVideos