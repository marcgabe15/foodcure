import api from '../api'

export function getData() {
    return {
        payload: api.get('markers')
    }
}

export function pushData(data) {
    return {
        payload: api.put('addMarker', data)
    }
}