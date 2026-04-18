import type { StaticScript } from './types';

export const installSource: StaticScript = {
  type: 'static',
  title: 'Source',
  content: `cargo install --path .

# or
cargo build --release
./target/release/aic setup`,
};
