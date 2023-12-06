
export default function Welcome({session}) {
    return (
    <section className="bg-stone-200 dark:bg-stone-200 pb-20">
        <div>
      {session ? (
        <p>Welcome, {session.user.name}!</p>
      ) : (
        <p>You are not signed in.</p>
      )}
      {session ? (
        <p>Welcome, {session.user.email}!</p>
      ) : (
        <p>You are not signed in.</p>
      )}
      {session ? (
        //<img src={session.user.picture}></img>
        <p>{session.user.image}</p>
      ) : (
        <p>You are not signed in.</p>
      )}
    </div>
    </section>
    )
}