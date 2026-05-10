

declare var test2: number;

declare module 'react' {
    let x: string
    export { x }
}

namespace TEST {
    var x: number
    export { x }
}

// export {}