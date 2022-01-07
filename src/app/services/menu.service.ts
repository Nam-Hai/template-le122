export class menuService {
    


    menuJSON = [
        {
            title: "Menu",
            items: [
                {
                    name: 'Menu, entrée, plat, dessert',
                    price: '39,00€',
                    note: ''
                },
                {
                    name: 'Menu Dégustation',
                    price: '59,00€',
                    note: 'uniquement au dîner, en 6 services, pour l’ensemble des convives'
                }
            ]
        },
        {
            title: "Carte",
            items: [
                {
                    subTitle: "Entrée"
                },
                {
                    name: 'Œuf parfait, maïs et chorizo',
                    price: '12,00€',
                    note: 'Lait, Oeufs'
                },
                {
                    name: 'Ceviche de daurade, agrumes et coriandre',
                    price: '12,00€',
                    note: 'Poissons'
                },
                {
                    name: 'Salade de poulpe, piquillos condiments tomate +3',
                    price: '12,00€',
                    note: 'Fruit à coque, Mollusques'
                },
                {
                    name: 'Champignons des bois poêlés, magret de canard fumé',
                    price: '12,00€',
                    note: 'Arachides, Gluten'
                },
                {
                    subTitle: "Plats"
                },
                {
                    name: "Noix de Saint-Jacques, purée d’artichauts, émulsion truffée +3",
                    price: "26,00€",
                    note: "Poissons, Lait"
                },
                {
                    name: "Turbot, risotto Vénéré, agrumes confits+3",
                    price: "26,00€",
                    note: "Poissons, Lait"
                },
                {
                    name: "Bar rôti, tombée d’épinards, retour d’Asie",
                    price: "26,00€",
                    note: "Poissons, Soja"
                },
                {
                    name: "Volaille fermière, purée de châtaignes, jus de courge",
                    price: "26,00€",
                    note: ""
                },
                {
                    name: "Poitrine de cochon confite au cidre miel, épeautre",
                    price: "26,00€",
                    note: "Arachides, Sulfites"
                },
                {
                    subTitle: "Desserts"
                },
                {
                    name: "Assortiment de fromages A.O.P affinés",
                    price: "10,00€",
                    note: "Lait, Sulfites"
                },
                {
                    name: "Fondant chocolat grand cru Acarigua, glace à la noisette",
                    price: "10,00€",
                    note: 'Lait, Oeuf'
                },
                {
                    name: "Riz au lait, caramel passion",
                    price: "10,00€",
                    note: "Lait"
                },
                {
                    name:"Crémeux marron, meringue croustillante",
                    price: "10,00€",
                    note: "Lait, Oeufs"
                },{
                    name:"Sorbets et glaces artisanaux au choix",
                    price: "10,00€",
                    note: "Lait, Oeufs"
                },{
                    name:"Tarte au citron #le122",
                    price: "10,00€",
                    note: "Lait, Oeufs, Gluten"
                }
            ]
        },
    ]

    carteVinJSON = [
        {
            title: "Vins au verre",
            titleNote: "15cl",
            items: [
                {
                    subTitle: "Blancs"
                },
                {
                    name: "Champagne - Grand Cru Brut - Hervy-Quénardel",
                    price: "13,00€",
                    note:"Verzenay"
                },
                {
                    name: "Sancerre - 2018 Olivier Foucher",
                    price: "8,00€",
                    note: ""
                },
                {
                    name:"Menetou-Salon - Les Bornés 2020 Domaine Henry Pellé",
                    price: "8,00€"
                },
                {
                    name:"Chablis - Les Ouches 2017 Domaine Bersan",
                    price: "9,00€"
                },
                {
                    name: "Saint-Joseph 2018 - Bernard",
                    price: "9,00€"
                },
                {
                    name: "Calcaires d'Ensérune 2018 Domaine La Combe Saint-Paul",
                    price: "7,00€"
                },
                {
                    subTitle: "Rosé"
                },
                {
                    name: "Cuvée du moment - IGP/AOP",
                    price: "8,00€"
                },
                {
                    subTitle: "Rouge"
                },
                {
                    name: "Menetou-Salon - Les Bornés 2018",
                    price:"8,00€",
                    note: "Domaine Henry Pellé"
                },
                {
                    name: "Hautes-Côtes de Nuits - 16ème Génération 2018 Guy et Yvan Dufouleur",
                    price: "8,00€"
                },
                {
                    name: "Vacqueyras 2018 - Domaine d’Ouréa",
                    price: "8,00€"
                },
                {
                    name: "Crozes-Hermitage - Tradition 2018 Yann Chave",
                    price: "9,00€"
                },
                {
                    subTitle: "Vins doux naturels"
                },
                {
                    name: "Muscat du moment",
                    price: "7,00€",
                    note: "8 cl"
                },
                {
                    name: "Rappo - Domaine Orenga de Gaffory",
                    price: "7,00€",
                    note: "8 cl"
                },
                {
                    name: "Maury - MA - 20 ans d'âge - Mas Amiel",
                    price: "11,00€",
                    note: "8 cl"
                },
                {
                    name: "Banyuls Grand Cru - Pur Tradition - Cellier des Templiers",
                    price: "6,00€",
                    note: "8 cl"
                },
                {
                    name: "Pineau des Charentes - François 1er - Maison Gaston Rivière",
                    price: "9,00€",
                    note: "8 cl"
                }
            ]
        },
        {
            title: "Vin rosé",
            titleNote: "75 cl",
            items: [
                {
                    name: "Cuvée du moment – IGP / AOP",
                    price: "32,00€",
                }
            ]
        },
        {
            title: "Vins Blancs",
            titleNote: "75 cl",
            items: [
                {
                    subTitle: "Champagne"
                },
                {
                    name:"Grand Cru Brut - Hervy-Quénardel - Verzenay",
                    price: "49,00€"
                },
                {
                    name: "Extra Brut - Hugues Godmé - Verzenay",
                    price : "57,00€"
                },
                {
                    name: "Blanc de Noirs L'Or d'Eugène - Moussé fils - Cuislse",
                    price: "52,00€"
                },
                {
                    name: "Brut - Royale Réserve - Philipponnat - Mareuil-sur-Aÿ",
                    price: "69,00€"
                },
                {
                    name: "1er Cru - Grand Cellier - Vilmart & Cie - Rilly-la-Montagne",
                    price: "84,00€"
                },
                {
                    name: "Grand Cru Extra Brut - Ros&Blanc Collection - Pertois-Moriset - Le Mesnil-sur-Oger",
                    price: "76,00€"
                },
                {
                    name: "Grand Cru Extra Brut - Blanc de Blancs - Franck Bonville - Avize",
                    price: "74,00€"
                },
                {
                    name: "Brut Nature - Lieu-Dit Largillier - Jérôme Coessens - Ville-sur-Arce",
                    price: "72,00€"
                },
                {
                    subTitle: "Alsace"
                },
                {
                    name:"Gewurztraminer - Lieu-dit Haguenau 2017 Domaine Kientzler",
                    price: "36,00€"
                },
                {
                    name: "Pinot Gris - Réserve Particulière 2016 Domaine Kientzler",
                    price : "36,00€"
                },
                {
                    name: "Pinot Gris Grand Cru - Osterberg 2016 Domaine Kientzler",
                    price: "45,00€"
                },
                {
                    name: "Riesling - Ribeauvillé 2017 Domaine Kientzler",
                    price: "38,00€"
                },

            ]
        }
    ]

    JSON = [
        {
            headerTitle: "Carte & Menu",
            menuJSON: this.menuJSON
        },
        {
            headerTitle: "Extrait de la carte des Vins",
            menuJSON: this.carteVinJSON
        }
    ]
}