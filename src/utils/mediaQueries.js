export const breakpoints = [768, 1100, 1300];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export default mq;
