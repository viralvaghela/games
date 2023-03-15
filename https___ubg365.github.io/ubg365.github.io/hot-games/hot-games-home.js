function GetHG()
{
    fetch('hot-games/hot-games.json')
    .then(response => response.json())
    .then(data => {
        var item = "";
        $.each(data, function (index, value) {
        item += `<div class="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-6 col-xxl-4 left link">
                    <div class="toplay-item">
                        <div class="toplay-detail">
                            <a href="/${value.slug}/">
                                <div class="toplay-item-content">
                                    <div class="toplay-img">
                                        <img loading="lazy" src="hot-games/thumbs/${value.thumb}" title="${value.title}" alt="${value.title}">
                                    </div>
                                    <div class="toplay-info">${value.title}             </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>`;
        });
        $("#hotgames").html(item);
    });
}

