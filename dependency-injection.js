class Maps {
    createRoute() {
    }

    getLocation() {
    }
}

class GoogleMaps extends Maps {
    createRoute() {
        console.log('Route fo GoogleMaps')
    }

    getLocation() {
        console.log('Google: location')
    }
}

class YandexMaps extends Maps {
    createRoute() {
        console.log('Route fo YandexMaps')
    }

    getLocation() {
        console.log('Yandex: location')
    }
}

class MapsService {
    constructor(maps) {
        this.maps = maps;
    }

    createRoute() {
        this.maps.createRoute();
    }

    getCurrentLocation() {
        this.maps.getLocation();
    }
}

class App {
    constructor(browser) {
        this.maps = null
        this.mapService = null

        if (browser === 'Google') {
            this.maps = new GoogleMaps()
        } else if (browser === 'Yandex') {
            this.maps = new YandexMaps()
        }

        if (this.maps) {
            this.mapService = new MapsService(this.maps)
        }
    }

    run() {
        this.mapService.getCurrentLocation();
        this.mapService.createRoute()
    }
}

const app = new App('Yandex')
app.run()
