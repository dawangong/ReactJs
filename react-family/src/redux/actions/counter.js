export const INCREMENT = "增加";
export const DECREMENT = "减少";
export const RESET = "重置";

export function increment() {
    return {type: INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}

export function reset() {
    return {type: RESET}
}