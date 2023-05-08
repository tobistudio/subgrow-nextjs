import React from 'react';

interface ErrorPageProps {
  statusCode: number;
}

// TODO: this is appearing when it should not!!!!!
// TODO: https://legacy.reactjs.org/docs/error-decoder.html/?invariant=426

// Error: Minified React error #426; visit https://reactjs.org/docs/error-decoder.html?invariant=426 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
//   NextJS 6
// oL
// oF
// ox
// oC
// r4
// ow
// framework-06a91fef12f27585.js:9:69816
// NextJS 10

const ErrorPage: React.FC<ErrorPageProps> = ({ statusCode }) => {
  // Handle specific error status codes (e.g., 500) here
  let errorMessage = 'An error occurred';
  if (statusCode === 500) {
    errorMessage = 'A server-side error occurred';
  }

  return (
    <div>
      <h1>Error</h1>
      <p>{errorMessage}   <br />{statusCode}</p>
    </div>
  );
};

export async function getServerSideProps({ req }: { req: { statusCode: any } }): Promise<{ props: ErrorPageProps }> {
  const statusCode = req ? req.statusCode : null;
  return { props: { statusCode } };
}

export default ErrorPage;
