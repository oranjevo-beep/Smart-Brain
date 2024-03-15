export default function Rank({ userName, userEntries }) {
  console.log(userEntries, 'userEntries#');
  return (
    <div className="mb-5">
      <div className="text-center">
        <h1 className="text-3xl font-semibold leading-9 text-green-500">
          {userName}, your current rank is...
        </h1>
        <h2 className="text-5xl font-semibold leading-9 text-orange-400">
          #{userEntries}
        </h2>
      </div>
    </div>
  );
}
