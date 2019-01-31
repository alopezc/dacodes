export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return [
                {
                    local: false,
                    opponent: 'TM Fútbol Club',
                    opponent_image:
                        'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10962/10962.png',
                    datetime: '2019-01-05T03:00:00+00:00',
                    league: 'Ascenso MX',
                    image:
                        'https://venados.dacodes.mx/img/usr/b1fb64358ae244e5beee6ff67081c50f.jpeg',
                    home_score: 2,
                    away_score: 0
                },
                {
                    local: true,
                    opponent: 'Club Atlético Zacatepec ',
                    opponent_image:
                        'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/11221/11221.png',
                    datetime: '2019-01-12T23:00:00+00:00',
                    league: 'Ascenso MX',
                    image:
                        'https://venados.dacodes.mx/img/usr/22372d068fa146dc8f7d7161516328db.jpg',
                    home_score: 0,
                    away_score: 2
                },
                {
                    local: true,
                    opponent: 'Club Atlético de San Luis ',
                    opponent_image:
                        'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/11220/11220.png',
                    datetime: '2019-01-19T02:30:00+00:00',
                    league: 'Ascenso MX',
                    image:
                        'https://venados.dacodes.mx/img/usr/5cf40fb861ab481995ee2db5af5cf9f9.JPG',
                    home_score: -1,
                    away_score: 1
                },
                {
                    local: false,
                    opponent: 'Celaya F.C.',
                    opponent_image:
                        'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/10726/10726.png',
                    datetime: '2019-01-27T01:00:00+00:00',
                    league: 'Ascenso MX',
                    image:
                        'https://venados.dacodes.mx/img/usr/eba25f4554d64fa8ad74f14c580b862c.JPG',
                    home_score: 1,
                    away_score: 1
                },
                {
                    local: false,
                    opponent: 'FC Juárez',
                    opponent_image:
                        'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/10725/10725.png',
                    datetime: '2019-02-10T01:00:00+00:00',
                    league: 'Ascenso MX',
                    image:
                        'https://venados.dacodes.mx/img/usr/ca040fd0d85f4a89acef43746b5f1379.JPG',
                    home_score: 0,
                    away_score: 0
                },
                {
                    local: true,
                    opponent: 'U. A. Edo. Méx.',
                    opponent_image:
                        'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/171/171.png',
                    datetime: '2019-02-17T01:00:00+00:00',
                    league: 'Ascenso MX',
                    image:
                        'https://venados.dacodes.mx/img/usr/91847d07ab334a7b8635579818e12a3c.JPG',
                    home_score: 0,
                    away_score: 0
                },
                {
                    local: false,
                    opponent: 'Cimarrones',
                    opponent_image:
                        'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/10721/10721.png',
                    datetime: '2019-02-23T03:30:00+00:00',
                    league: 'Ascenso MX',
                    image:
                        'https://venados.dacodes.mx/img/usr/b0e74353a92f4956b02dcb8e0f9e8b42.JPG',
                    home_score: 0,
                    away_score: 0
                },
                {
                    local: true,
                    opponent: 'Correcaminos',
                    opponent_image:
                        'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/21/21.png',
                    datetime: '2019-03-03T01:00:00+00:00',
                    league: 'Ascenso MX',
                    image:
                        'https://venados.dacodes.mx/img/usr/0ed1f07486794f40955307898f421b24.JPG',
                    home_score: 0,
                    away_score: 0
                },
                {
                    local: false,
                    opponent: 'Atlante',
                    opponent_image:
                        'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/2/2.png',
                    datetime: '2019-03-06T01:00:00+00:00',
                    league: 'Ascenso MX',
                    image:
                        'https://venados.dacodes.mx/img/usr/eefe02790eba4b63ab798e2f1648fa26.JPG',
                    home_score: 0,
                    away_score: 0
                },
                {
                    local: true,
                    opponent: 'Cafetaleros',
                    opponent_image:
                        'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/10731/10731.png',
                    datetime: '2019-03-09T02:30:00+00:00',
                    league: 'Ascenso MX',
                    image:
                        'https://venados.dacodes.mx/img/usr/052b44d64a2c40bcbb258f9797354311.JPG',
                    home_score: 0,
                    away_score: 0
                },
                {
                    local: false,
                    opponent: 'Alebrijes',
                    opponent_image:
                        'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/3088/3088.png',
                    datetime: '2019-03-17T01:00:00+00:00',
                    league: 'Ascenso MX',
                    image:
                        'https://venados.dacodes.mx/img/usr/1002d4323d23447792de329622134ca6.JPG',
                    home_score: 0,
                    away_score: 0
                },
                {
                    local: true,
                    opponent: 'U. de G.',
                    opponent_image:
                        'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/33/33.png',
                    datetime: '2019-03-30T02:30:00+00:00',
                    league: 'Ascenso MX',
                    image:
                        'https://venados.dacodes.mx/img/usr/0d98619731314985b8e388612b94767c.JPG',
                    home_score: 0,
                    away_score: 0
                },
                {
                    local: false,
                    opponent: 'Dorados',
                    opponent_image:
                        'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/3111/3111.png',
                    datetime: '2019-04-06T02:00:00+00:00',
                    league: 'Ascenso MX',
                    image:
                        'https://venados.dacodes.mx/img/usr/4d98b4046d774de28e4eecf1d370f4ee.JPG',
                    home_score: 0,
                    away_score: 0
                },
                {
                    local: true,
                    opponent: 'Mineros',
                    opponent_image:
                        'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/10449/10449.png',
                    datetime: '2019-04-13T01:30:00+00:00',
                    league: 'Ascenso MX',
                    image:
                        'https://venados.dacodes.mx/img/usr/40df8acd49334c86bde1e307294f1c90.JPG',
                    home_score: 0,
                    away_score: 0
                }
            ];
        default:
            return state;
    }
};
