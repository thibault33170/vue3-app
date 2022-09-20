import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
    let server = createServer({
        environment,

        models: {
            property: Model,
        },

        seeds(server) {
            server.create('property', {
                "id": 1,
                "created_at": "2022-01-01 09:00:00",
                "updated_at": "2022-01-02 09:00:00",
                "rented_at": "2021-11-30",
                "name": "Maison Principale",
                "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                "address": {
                    "number": 15,
                    "street": "rue du Paradis",
                    "postcode": 75010,
                    "city": "Paris"
                },
                "surface": 56.77,
                "amount": 1280,
                "status": "available",
                "tenants": [
                    {
                        "id": 1,
                        "firstname": "John",
                        "lastname": "DOE"
                    },
                    {
                        "id": 2,
                        "firstname": "Bob",
                        "lastname": "MORANE"
                    }
                ]
            },)

            server.create('property', {
                "id": 2,
                "created_at": "2022-01-21 09:00:00",
                "updated_at": "2022-01-22 09:00:00",
                "rented_at": "2021-11-30",
                "name": "Appartement T3",
                "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                "address": {
                    "number": 42,
                    "street": "rue des loutres",
                    "postcode": 33000,
                    "city": "Bordeaux"
                },
                "surface": 127.24,
                "amount": 1950,
                "status": "unavailable",
                "tenants": [
                    {
                        "id": 3,
                        "firstname": "Jacques",
                        "lastname": "DOE"
                    },
                    {
                        "id": 4,
                        "firstname": "Harry",
                        "lastname": "Potter"
                    }
                ]
            },)

            server.create('property', {
                "id": 3,
                "created_at": "2022-01-21 09:00:00",
                "updated_at": "2022-01-22 09:00:00",
                "rented_at": "2021-11-30",
                "name": "Appartement cheap",
                "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                "address": {
                    "number": 42,
                    "street": "rue de la soif",
                    "postcode": 40090,
                    "city": "Mont de marsan"
                },
                "surface": 24.8,
                "amount": 350,
                "status": "available",
                "tenants": [
                    {
                        "id": 5,
                        "firstname": "Nicole",
                        "lastname": "Dupont"
                    },
                    {
                        "id": 6,
                        "firstname": "Tom",
                        "lastname": "Jedusor"
                    }
                ]
            })


            server.create('property', {
                "id": 4,
                "created_at": "2022-01-21 09:00:00",
                "updated_at": "2022-01-22 09:00:00",
                "rented_at": "2021-11-30",
                "name": "Appartement cool",
                "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                "address": {
                    "number": 42,
                    "street": "rue de la soif",
                    "postcode": 40090,
                    "city": "Mont de marsan"
                },
                "surface": 24.8,
                "amount": 350,
                "status": "available",
                "tenants": [
                    {
                        "id": 5,
                        "firstname": "Nicole",
                        "lastname": "Dupont"
                    },
                    {
                        "id": 6,
                        "firstname": "Tom",
                        "lastname": "Jedusor"
                    }
                ]
            }),

                server.create('property', {
                    "id": 5,
                    "created_at": "2022-01-21 09:00:00",
                    "updated_at": "2022-01-22 09:00:00",
                    "rented_at": "2021-11-30",
                    "name": "Appartement moyen",
                    "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                    "address": {
                        "number": 42,
                        "street": "rue de la soif",
                        "postcode": 40090,
                        "city": "Mont de marsan"
                    },
                    "surface": 24.8,
                    "amount": 350,
                    "status": "available",
                    "tenants": [
                        {
                            "id": 5,
                            "firstname": "Nicole",
                            "lastname": "Dupont"
                        },
                        {
                            "id": 6,
                            "firstname": "Tom",
                            "lastname": "Jedusor"
                        }
                    ]
                }),

                server.create('property', {
                    "id": 6,
                    "created_at": "2022-01-21 09:00:00",
                    "updated_at": "2022-01-22 09:00:00",
                    "rented_at": "2021-11-30",
                    "name": "Appartement 254",
                    "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                    "address": {
                        "number": 42,
                        "street": "rue de la soif",
                        "postcode": 40090,
                        "city": "Mont de marsan"
                    },
                    "surface": 24.8,
                    "amount": 350,
                    "status": "available",
                    "tenants": [
                        {
                            "id": 5,
                            "firstname": "Nicole",
                            "lastname": "Dupont"
                        },
                        {
                            "id": 6,
                            "firstname": "Tom",
                            "lastname": "Jedusor"
                        }
                    ]
                }),

                server.create('property', {
                    "id": 7,
                    "created_at": "2022-01-21 09:00:00",
                    "updated_at": "2022-01-22 09:00:00",
                    "rented_at": "2021-11-30",
                    "name": "Appartement 6978",
                    "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                    "address": {
                        "number": 42,
                        "street": "rue de la soif",
                        "postcode": 40090,
                        "city": "Mont de marsan"
                    },
                    "surface": 24.8,
                    "amount": 350,
                    "status": "available",
                    "tenants": [
                        {
                            "id": 5,
                            "firstname": "Nicole",
                            "lastname": "Dupont"
                        },
                        {
                            "id": 6,
                            "firstname": "Tom",
                            "lastname": "Jedusor"
                        }
                    ]
                }),

                server.create('property', {
                    "id": 8,
                    "created_at": "2022-01-21 09:00:00",
                    "updated_at": "2022-01-22 09:00:00",
                    "rented_at": "2021-11-30",
                    "name": "Appartement 9978",
                    "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                    "address": {
                        "number": 42,
                        "street": "rue de la soif",
                        "postcode": 40090,
                        "city": "Mont de marsan"
                    },
                    "surface": 24.8,
                    "amount": 350,
                    "status": "available",
                    "tenants": [
                        {
                            "id": 5,
                            "firstname": "Nicole",
                            "lastname": "Dupont"
                        },
                        {
                            "id": 6,
                            "firstname": "Tom",
                            "lastname": "Jedusor"
                        }
                    ]
                }),

                server.create('property', {
                    "id": 9,
                    "created_at": "2022-01-21 09:00:00",
                    "updated_at": "2022-01-22 09:00:00",
                    "rented_at": "2021-11-30",
                    "name": "Appartement 5618",
                    "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                    "address": {
                        "number": 42,
                        "street": "rue de la soif",
                        "postcode": 40090,
                        "city": "Mont de marsan"
                    },
                    "surface": 24.8,
                    "amount": 350,
                    "status": "available",
                    "tenants": [
                        {
                            "id": 5,
                            "firstname": "Nicole",
                            "lastname": "Dupont"
                        },
                        {
                            "id": 6,
                            "firstname": "Tom",
                            "lastname": "Jedusor"
                        }
                    ]
                }),

                server.create('property', {
                    "id": 10,
                    "created_at": "2022-01-21 09:00:00",
                    "updated_at": "2022-01-22 09:00:00",
                    "rented_at": "2021-11-30",
                    "name": "Appartement cheap",
                    "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                    "address": {
                        "number": 42,
                        "street": "rue de la soif",
                        "postcode": 40090,
                        "city": "Mont de marsan"
                    },
                    "surface": 24.8,
                    "amount": 350,
                    "status": "available",
                    "tenants": [
                        {
                            "id": 5,
                            "firstname": "Nicole",
                            "lastname": "Dupont"
                        },
                        {
                            "id": 6,
                            "firstname": "Tom",
                            "lastname": "Jedusor"
                        }
                    ]
                }),

                server.create('property', {
                    "id": 11,
                    "created_at": "2022-01-21 09:00:00",
                    "updated_at": "2022-01-22 09:00:00",
                    "rented_at": "2021-11-30",
                    "name": "Appartement test",
                    "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                    "address": {
                        "number": 42,
                        "street": "rue de la soif",
                        "postcode": 40090,
                        "city": "Mont de marsan"
                    },
                    "surface": 24.8,
                    "amount": 350,
                    "status": "available",
                    "tenants": [
                        {
                            "id": 5,
                            "firstname": "Nicole",
                            "lastname": "Dupont"
                        },
                        {
                            "id": 6,
                            "firstname": "Tom",
                            "lastname": "Jedusor"
                        }
                    ]
                }),

                server.create('property', {
                    "id": 12,
                    "created_at": "2022-01-21 09:00:00",
                    "updated_at": "2022-01-22 09:00:00",
                    "rented_at": "2021-11-30",
                    "name": "Appartement cheap",
                    "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                    "address": {
                        "number": 42,
                        "street": "rue de la soif",
                        "postcode": 40090,
                        "city": "Mont de marsan"
                    },
                    "surface": 24.8,
                    "amount": 350,
                    "status": "available",
                    "tenants": [
                        {
                            "id": 5,
                            "firstname": "Nicole",
                            "lastname": "Dupont"
                        },
                        {
                            "id": 6,
                            "firstname": "Tom",
                            "lastname": "Jedusor"
                        }
                    ]
                }),

                server.create('property', {
                    "id": 13,
                    "created_at": "2022-01-21 09:00:00",
                    "updated_at": "2022-01-22 09:00:00",
                    "rented_at": "2021-11-30",
                    "name": "Appartement cheap",
                    "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                    "address": {
                        "number": 42,
                        "street": "rue de la soif",
                        "postcode": 40090,
                        "city": "Mont de marsan"
                    },
                    "surface": 24.8,
                    "amount": 350,
                    "status": "available",
                    "tenants": [
                        {
                            "id": 5,
                            "firstname": "Nicole",
                            "lastname": "Dupont"
                        },
                        {
                            "id": 6,
                            "firstname": "Tom",
                            "lastname": "Jedusor"
                        }
                    ]
                }),

                server.create('property', {
                    "id": 14,
                    "created_at": "2022-01-21 09:00:00",
                    "updated_at": "2022-01-22 09:00:00",
                    "rented_at": "2021-11-30",
                    "name": "Appartement cheap",
                    "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                    "address": {
                        "number": 42,
                        "street": "rue de la soif",
                        "postcode": 40090,
                        "city": "Mont de marsan"
                    },
                    "surface": 24.8,
                    "amount": 350,
                    "status": "available",
                    "tenants": [
                        {
                            "id": 5,
                            "firstname": "Nicole",
                            "lastname": "Dupont"
                        },
                        {
                            "id": 6,
                            "firstname": "Tom",
                            "lastname": "Jedusor"
                        }
                    ]
                })

            server.create('property', {
                "id": 15,
                "created_at": "2022-01-21 09:00:00",
                "updated_at": "2022-01-22 09:00:00",
                "rented_at": "2021-11-30",
                "name": "Appartement cheap",
                "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                "address": {
                    "number": 42,
                    "street": "rue de la soif",
                    "postcode": 40090,
                    "city": "Mont de marsan"
                },
                "surface": 24.8,
                "amount": 350,
                "status": "available",
                "tenants": [
                    {
                        "id": 5,
                        "firstname": "Nicole",
                        "lastname": "Dupont"
                    },
                    {
                        "id": 6,
                        "firstname": "Tom",
                        "lastname": "Jedusor"
                    }
                ]
            })

            server.create('property', {
                "id": 16,
                "created_at": "2022-01-21 09:00:00",
                "updated_at": "2022-01-22 09:00:00",
                "rented_at": "2021-11-30",
                "name": "Appartement last",
                "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                "address": {
                    "number": 42,
                    "street": "rue de la soif",
                    "postcode": 40090,
                    "city": "Mont de marsan"
                },
                "surface": 24.8,
                "amount": 350,
                "status": "available",
                "tenants": [
                    {
                        "id": 5,
                        "firstname": "Nicole",
                        "lastname": "Dupont"
                    },
                    {
                        "id": 6,
                        "firstname": "Tom",
                        "lastname": "Jedusor"
                    }
                ]
            })
        },

        routes() {
            this.namespace = "api"

            this.get("/properties", (schema, request) => {
                let { page, paginate } = request.queryParams

                page = parseInt(page)
                paginate = parseInt(paginate)


                let start = page * paginate
                let end = start + paginate

                const list = schema.properties.all()

                let filteredList = list.slice(start, end)

                return filteredList
            })

            this.get("/properties/:id", (schema, request) => {
                let id = request.params.id

                return schema.properties.find(id)
            })

            this.post("/properties", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)

                return schema.properties.create(attrs)
            })

            this.put("/properties/:id", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)

                let id = request.params.id

                const property = schema.properties.find(id)

                Object.keys(attrs).forEach((key) => {
                    property.update(key, attrs[key])
                })

                return property
            })

            this.delete("/properties/:id", (schema, request) => {
                let id = request.params.id

                return schema.properties.find(id).destroy()
            })
        },
    })

    return server
}