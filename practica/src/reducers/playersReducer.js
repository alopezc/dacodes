export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PLAYERS':
            return [
                {
                    forwards: [
                        {
                            name: 'Víctor Hugo',
                            first_surname: 'Lojero',
                            second_surname: 'Alexanderson',
                            birthday: '1984-11-17T00:00:00+00:00',
                            birth_place: 'Ciudad de México',
                            weight: 72,
                            height: 1.73,
                            position: 'Delantero',
                            number: 10,
                            position_short: 'DEL',
                            last_team: 'Venados FC',
                            image:
                                'https://venados.dacodes.mx/img/usr/673895a1f78d4bdaa50956cc03df84e4.jpg'
                        },
                        {
                            name: 'Víctor Manuel',
                            first_surname: 'Zúñiga',
                            second_surname: 'Medina',
                            birthday: '1996-03-21T00:00:00+00:00',
                            birth_place: 'Estado de México',
                            weight: 63,
                            height: 1.75,
                            position: 'Delantero',
                            number: 16,
                            position_short: 'DEL',
                            last_team: 'Cruz Azul',
                            image:
                                'https://venados.dacodes.mx/img/usr/efe7b683002c431d8c961fd90fdbd851.jpg'
                        },
                        {
                            name: 'Esteban',
                            first_surname: 'Torres',
                            second_surname: 'Rivera',
                            birthday: '1999-06-27T00:00:00+00:00',
                            birth_place: 'Tamaulipas',
                            weight: 65,
                            height: 1.82,
                            position: 'Delantero',
                            number: 15,
                            position_short: 'DEL',
                            last_team: 'Albinegros',
                            image:
                                'https://venados.dacodes.mx/img/usr/581b6b4009d14d6ea39cace557a59394.jpg'
                        },
                        {
                            name: 'Freddy Jesús',
                            first_surname: 'Martín',
                            second_surname: 'Mex',
                            birthday: '1987-04-14T00:00:00+00:00',
                            birth_place: 'Mérida',
                            weight: 78,
                            height: 1.8,
                            position: 'Delantero',
                            number: 19,
                            position_short: 'DEL',
                            last_team: 'Dorados de Sinaloa',
                            image:
                                'https://venados.dacodes.mx/img/usr/164566d591604580af5014b385b9eda9.jpg'
                        },
                        {
                            name: 'Franco Miguel',
                            first_surname: 'Miguel',
                            second_surname: 'Faría',
                            birthday: '1992-09-29T00:00:00+00:00',
                            birth_place: 'Santa Fe, Argentina',
                            weight: 74,
                            height: 1.78,
                            position: 'Delantero',
                            number: 30,
                            position_short: 'DEL',
                            last_team: 'Venados FC',
                            image:
                                'https://venados.dacodes.mx/img/usr/a180055c926f4f439399114cc4a59b4b.jpg'
                        },
                        {
                            name: 'Alan',
                            first_surname: 'Guillermo',
                            second_surname: 'Murialdo',
                            birthday: '1992-09-24T00:00:00+00:00',
                            birth_place: 'Argentina',
                            weight: 85,
                            height: 1.93,
                            position: 'Delantero',
                            number: 9,
                            position_short: 'DEL',
                            last_team: 'Sport Rosari',
                            image:
                                'https://venados.dacodes.mx/img/usr/c69ed60a6b094ef9afdf8c240f699200.jpeg'
                        },
                        {
                            name: 'Gustavo',
                            first_surname: 'Cañizalez',
                            second_surname: 'Valdelamar',
                            birthday: '1995-12-17T00:00:00+00:00',
                            birth_place: 'Colombia',
                            weight: 75,
                            height: 1.78,
                            position: 'Delantero',
                            number: 20,
                            position_short: 'DEL',
                            last_team: 'Deportes Tolima',
                            image:
                                'https://venados.dacodes.mx/img/usr/7aebbaed485f492fa8f25da64e7fe3ac.jpg'
                        }
                    ],
                    centers: [
                        {
                            name: 'Eduardo',
                            first_surname: 'Fernández',
                            second_surname: 'Aldana',
                            birthday: '1990-04-03T00:00:00+00:00',
                            birth_place: 'Mérida, Yucatán',
                            weight: 70,
                            height: 1.74,
                            position: 'Mediocampista',
                            number: 7,
                            position_short: 'MED',
                            last_team: 'Venados',
                            image:
                                'https://venados.dacodes.mx/img/usr/07374a6cd0b84df380641f1ecb7230f6.jpg'
                        },
                        {
                            name: 'Manuel Alejandro',
                            first_surname: 'Vela',
                            second_surname: 'Garrido',
                            birthday: '1984-03-28T00:00:00+00:00',
                            birth_place: 'Benito Juárez, Quintana Roo',
                            weight: 72,
                            height: 1.72,
                            position: 'Mediocampista',
                            number: 11,
                            position_short: 'MED',
                            last_team: 'Venados FC',
                            image:
                                'https://venados.dacodes.mx/img/usr/0eb8eb76aef0452c9b4e030c82b4e8d1.jpg'
                        },
                        {
                            name: 'Aldo Francisco',
                            first_surname: 'Polo',
                            second_surname: 'Ramírez',
                            birthday: '1983-10-31T00:00:00+00:00',
                            birth_place: 'Ciudad de México',
                            weight: 72,
                            height: 1.75,
                            position: 'Mediocampista',
                            number: 8,
                            position_short: 'MED',
                            last_team: 'Venados FC',
                            image:
                                'https://venados.dacodes.mx/img/usr/ec288af814c9474bbbceb800ee2c90f7.jpg'
                        },
                        {
                            name: 'Heider Uriel',
                            first_surname: 'Ruiz',
                            second_surname: 'Carrera',
                            birthday: '1998-07-28T00:00:00+00:00',
                            birth_place: 'Playa del Carmen, Q.Roo',
                            weight: 63,
                            height: 1.72,
                            position: 'Mediocampista',
                            number: 23,
                            position_short: 'MED',
                            last_team: 'Venados FC',
                            image:
                                'https://venados.dacodes.mx/img/usr/e40ccf125e8742b595324ee4db6f65b0.jpg'
                        },
                        {
                            name: 'Juan José',
                            first_surname: 'Miguel',
                            second_surname: 'Busto',
                            birthday: '1997-05-22T00:00:00+00:00',
                            birth_place: 'Ciudad de México',
                            weight: 72,
                            height: 1.75,
                            position: 'Mediocampista',
                            number: 14,
                            position_short: 'MED',
                            last_team: 'Pumas UNAM',
                            image:
                                'https://venados.dacodes.mx/img/usr/647ed75c63454e65ad9444194b0c8417.jpg'
                        },
                        {
                            name: 'José David',
                            first_surname: 'Rosado',
                            second_surname: 'Reyes',
                            birthday: '1999-05-03T00:00:00+00:00',
                            birth_place: 'Mérida, Yucatán',
                            weight: 56,
                            height: 1.72,
                            position: 'Mediocampista',
                            number: 26,
                            position_short: 'MED',
                            last_team: 'Venados FC',
                            image:
                                'https://venados.dacodes.mx/img/usr/558fb9097f0143b1b4464c4f31faa0ee.jpg'
                        },
                        {
                            name: 'Francisco Paúl',
                            first_surname: 'Uscanga',
                            second_surname: 'Gutiérrez',
                            birthday: '1991-03-25T00:00:00+00:00',
                            birth_place: 'Coatzacoalcos, Veracruz',
                            weight: 59,
                            height: 1.65,
                            position: 'Mediocampista',
                            number: 63,
                            position_short: 'MED',
                            last_team: 'Querétaro',
                            image:
                                'https://venados.dacodes.mx/img/usr/920e8ff326cd44f799a3ebf80c74467c.jpg'
                        }
                    ],
                    defenses: [
                        {
                            name: 'Manuel Ernesto',
                            first_surname: 'López',
                            second_surname: 'Mondragón',
                            birthday: '1983-02-22T00:00:00+00:00',
                            birth_place: 'Veracruz, Veracruz',
                            weight: 65,
                            height: 1.7,
                            position: 'Defensa',
                            number: 5,
                            position_short: 'DEF',
                            last_team: 'Venados FC',
                            image:
                                'https://venados.dacodes.mx/img/usr/3690f8742052484381737b69e2a48caa.jpg'
                        },
                        {
                            name: 'Gabriel Alejandro',
                            first_surname: 'Báez',
                            second_surname: 'Corradi',
                            birthday: '1995-06-21T00:00:00+00:00',
                            birth_place: 'Argentina',
                            weight: 74,
                            height: 1.75,
                            position: 'Defensa',
                            number: 22,
                            position_short: 'DEF',
                            last_team: 'Venados FC',
                            image:
                                'https://venados.dacodes.mx/img/usr/3d92ca5eb42c41acb5b9c4fe54c2ff7f.jpg'
                        },
                        {
                            name: 'Jonathan Alejandro',
                            first_surname: 'Sánchez',
                            second_surname: 'Hernández',
                            birthday: '1994-03-13T00:00:00+00:00',
                            birth_place: 'San Luis Potosí',
                            weight: 70,
                            height: 172,
                            position: 'Defensa',
                            number: 4,
                            position_short: 'DEF',
                            last_team: 'Venados FC',
                            image:
                                'https://venados.dacodes.mx/img/usr/c7a8e696062b465c9cefc6fdc3d037de.jpg'
                        },
                        {
                            name: 'José Carlos',
                            first_surname: 'Robles',
                            second_surname: 'Mejía',
                            birthday: '1996-07-16T00:00:00+00:00',
                            birth_place: 'Ciudad de México',
                            weight: 80,
                            height: 1.76,
                            position: 'Defensa',
                            number: 18,
                            position_short: 'DEF',
                            last_team: 'Pumas UNAM',
                            image:
                                'https://venados.dacodes.mx/img/usr/270f34ac9a144185aff1604b6557aefc.jpg'
                        },
                        {
                            name: 'Carlos Alberto',
                            first_surname: 'Galeana',
                            second_surname: 'Irra ',
                            birthday: '1988-12-21T00:00:00+00:00',
                            birth_place: 'Tecpan, Guerrero',
                            weight: 78,
                            height: 1.8,
                            position: 'Defensa',
                            number: 33,
                            position_short: 'DEF',
                            last_team: 'Celaya',
                            image:
                                'https://venados.dacodes.mx/img/usr/3a44e10dc26b4dcaa7bf16736824a953.jpg'
                        },
                        {
                            name: 'Carlos Josafat',
                            first_surname: 'Ramos',
                            second_surname: 'Ibarra',
                            birthday: '1986-11-12T00:00:00+00:00',
                            birth_place: 'Celaya',
                            weight: 82,
                            height: 1.8,
                            position: 'Defensa',
                            number: 3,
                            position_short: 'DEF',
                            last_team: 'Celaya',
                            image:
                                'https://venados.dacodes.mx/img/usr/d7abe47d5b4e443399d8573e6ad58ebe.jpg'
                        },
                        {
                            name: 'Bryan ',
                            first_surname: 'Colula',
                            second_surname: 'Alarcón',
                            birthday: '1996-04-06T00:00:00+00:00',
                            birth_place: 'Xalapa, Veracruz',
                            weight: 71,
                            height: 1.76,
                            position: 'Defensa',
                            number: 44,
                            position_short: 'DEF',
                            last_team: 'Alebrijes de Oaxaca',
                            image:
                                'https://venados.dacodes.mx/img/usr/96ea59094d9c42a7b79bc8ca1b1c47d1.jpg'
                        },
                        {
                            name: 'Luis Alberto',
                            first_surname: 'Sánchez',
                            second_surname: 'Rodríguez',
                            birthday: '1988-02-06T00:00:00+00:00',
                            birth_place: 'Tijuana, BC',
                            weight: 74,
                            height: 1.75,
                            position: 'Defensa',
                            number: 21,
                            position_short: 'DEF',
                            last_team: 'Celaya',
                            image:
                                'https://venados.dacodes.mx/img/usr/7a11329787c64bc8b8ed921b8a67ae9f.jpg'
                        },
                        {
                            name: 'Jorge',
                            first_surname: 'Exequiel',
                            second_surname: 'Márquez',
                            birthday: '1994-12-18T00:00:00+00:00',
                            birth_place: 'Argentina',
                            weight: 66,
                            height: 1.62,
                            position: 'Defensa',
                            number: 33,
                            position_short: 'DEF',
                            last_team: 'Atlético Independiente',
                            image:
                                'https://venados.dacodes.mx/img/usr/66b82446baa34cb7b7bb53ed55173c7e.jpg'
                        }
                    ],
                    goalkeepers: [
                        {
                            name: 'Armando',
                            first_surname: 'Navarrete',
                            second_surname: 'García',
                            birthday: '1980-11-22T00:00:00+00:00',
                            birth_place: 'Jacona, Michoacán',
                            weight: 80,
                            height: 1.8,
                            position: 'Portero',
                            number: 12,
                            position_short: 'POR',
                            last_team: 'Venados FC',
                            image:
                                'https://venados.dacodes.mx/img/usr/412809fcddef434e8a84fb6cbaaab76a.jpg'
                        },
                        {
                            name: 'Rafael',
                            first_surname: 'Ramírez',
                            second_surname: 'Miranda',
                            birthday: '1992-11-04T00:00:00+00:00',
                            birth_place: 'Guadalajara',
                            weight: 75,
                            height: 1.8,
                            position: 'Portero',
                            number: 25,
                            position_short: 'POR',
                            last_team: 'Tecos',
                            image:
                                'https://venados.dacodes.mx/img/usr/3aa3d10d3bfd40a6a23902ef473b5d8f.jpg'
                        },
                        {
                            name: 'Raiko',
                            first_surname: 'Arozarena',
                            second_surname: 'González',
                            birthday: '1997-03-27T00:00:00+00:00',
                            birth_place: 'Pinar del Río, Cuba',
                            weight: 82,
                            height: 1.83,
                            position: 'Portero',
                            number: 1,
                            position_short: 'POR',
                            last_team: 'Venados FC',
                            image:
                                'https://venados.dacodes.mx/img/usr/d8f974370965464a9a964af6c24925d2.jpg'
                        }
                    ],
                    coaches: [
                        {
                            name: 'Sergio',
                            first_surname: 'Orduña',
                            second_surname: 'Carrillo',
                            birthday: '1954-04-04T00:00:00+00:00',
                            birth_place: 'Morelos',
                            weight: null,
                            height: null,
                            role: 'Director Técnico',
                            role_short: 'DT',
                            image:
                                'https://venados.dacodes.mx/img/usr/af6adb904a1b41e5a00e627ed50ad5db.jpg'
                        },
                        {
                            name: 'Jesús Salvador',
                            first_surname: 'Aguado',
                            second_surname: 'Olvera',
                            birthday: '1971-12-16T00:00:00+00:00',
                            birth_place: 'Querétaro',
                            weight: null,
                            height: null,
                            role: 'Auxiliar',
                            role_short: 'Aux',
                            image:
                                'https://venados.dacodes.mx/img/usr/96c9dbe1376f4a3b9c90a5ee2076f2af.jpg'
                        },
                        {
                            name: 'Valtencir',
                            first_surname: 'Gomes',
                            second_surname: 'Da Silva',
                            birthday: '1969-12-26T00:00:00+00:00',
                            birth_place: 'Sao Paulo',
                            weight: null,
                            height: null,
                            role: 'Auxiliar',
                            role_short: 'Aux',
                            image:
                                'https://venados.dacodes.mx/img/usr/bec694594771469c93a52f6f4919b332.jpg'
                        },
                        {
                            name: 'Olimpo',
                            first_surname: 'Campos',
                            second_surname: 'Pineda',
                            birthday: '1968-10-12T00:00:00+00:00',
                            birth_place: 'Michoacán',
                            weight: null,
                            height: null,
                            role: 'Preparador físico',
                            role_short: 'PF',
                            image:
                                'https://venados.dacodes.mx/img/usr/420879443ce442368c196ac01622f9f0.jpg'
                        },
                        {
                            name: 'Alejandro',
                            first_surname: 'Arredondo',
                            second_surname: 'Herrera',
                            birthday: '1985-08-28T00:00:00+00:00',
                            birth_place: 'Ciudad de México',
                            weight: null,
                            height: null,
                            role: 'Entrenador de Porteros',
                            role_short: 'EP',
                            image:
                                'https://venados.dacodes.mx/img/usr/71ce0faccee04ee187277b4daf9715e6.jpg'
                        },
                        {
                            name: 'José Carlos',
                            first_surname: 'Narvaez',
                            second_surname: 'Borges',
                            birthday: '1990-12-05T00:00:00+00:00',
                            birth_place: 'Mérida',
                            weight: null,
                            height: null,
                            role: 'Fisioterapeuta',
                            role_short: 'FIS',
                            image:
                                'https://venados.dacodes.mx/img/usr/14e4968a9fe141138fb0fa14d517a14b.jpg'
                        },
                        {
                            name: 'Alberto',
                            first_surname: 'Gutiérrez',
                            second_surname: 'Castañeda',
                            birthday: '1980-12-13T00:00:00+00:00',
                            birth_place: 'León',
                            weight: null,
                            height: null,
                            role: 'Utilero',
                            role_short: 'UT',
                            image:
                                'https://venados.dacodes.mx/img/usr/132b6b292a714fd1ac943ab148a6dc29.jpg'
                        },
                        {
                            name: 'Santiago',
                            first_surname: 'Dorantes',
                            second_surname: 'Solís',
                            birthday: '1982-08-16T00:00:00+00:00',
                            birth_place: 'Progreso',
                            weight: null,
                            height: null,
                            role: 'Médico',
                            role_short: 'MED',
                            image:
                                'https://venados.dacodes.mx/img/usr/415458bce6fb49478be300f19943ef31.jpg'
                        },
                        {
                            name: 'Alejandro',
                            first_surname: 'Cabrera',
                            second_surname: 'Lara',
                            birthday: '1987-03-01T00:00:00+00:00',
                            birth_place: 'Mérida',
                            weight: null,
                            height: null,
                            role: 'Utilero',
                            role_short: 'UT',
                            image:
                                'https://venados.dacodes.mx/img/usr/f2759d3aee474d06a32583386e25524c.jpg'
                        }
                    ]
                }
            ];
        default:
            return state;
    }
};
