export class menuService {
    


    menuJSON = [
        {
            title: "Menu",
            titleNote: "15cl",
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
                }
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