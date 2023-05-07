import React from 'react';

interface ErrorPageProps {
  statusCode: number;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ statusCode }) => {
  // Handle specific error status codes (e.g., 500) here
  let errorMessage = 'An error occurred';
  if (statusCode === 500) {
    errorMessage = 'A server-side error occurred';
  }

  return (
    <div>
      <h1>Error</h1>
      <p>{errorMessage}</p>
    </div>
  );
};

export async function getServerSideProps({ req }: { req: { statusCode: any } }): Promise<{ props: ErrorPageProps }> {
  const statusCode = req ? req.statusCode : null;
  return { props: { statusCode } };
}

export default ErrorPage;
