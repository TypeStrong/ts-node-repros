declare module 'dnscache' {
  export default function dnscache(conf: {
    enable?: boolean;
    ttl?: number;
    cachesize?: number;
  }): void;
}

// declare module 'dnscache' {
//   function dnscache(conf: {
//     enable?: boolean;
//     ttl?: number;
//     cachesize?: number;
//   }): void;
//
//   export = dnscache;
// }
