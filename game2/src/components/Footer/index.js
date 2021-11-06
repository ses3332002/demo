import React from 'react';

export default function Footer({ moves }) {
  if (moves.length > 0) {
    return (
      <>
        `🐂` - присутствует и на своем месте, `🐄` - присутствует, но не на своем месте, `🙁` -
        отсутствует
      </>
    );
  } else {
    return <></>;
  }
}
