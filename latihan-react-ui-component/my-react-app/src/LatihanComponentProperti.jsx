
// Komponen User menerima props berupa name, username, bio, dan isVerified
// Props ini akan ditampilkan dalam bentuk description list
function User({ name, username, bio, isVerified }) {
  return (
    <div className="container">
      {/* Judul komponen */}
      <h3>Latihan Component Properti</h3>
      {/* Description list untuk menampilkan data user */}
      <dl>
        <dt>Name</dt>
        <dd>{name}</dd>
        <dt>Username</dt>
        <dd>{username}</dd>
        <dt>Bio</dt>
        <dd>{bio}</dd>
        <dt>Is Verified</dt>
        {/* Menggunakan ternary operator untuk menampilkan Yes/No */}
        <dd>{isVerified ? 'Yes' : 'No'}</dd>
      </dl>
    </div>
  );
}

// Komponen utama yang merender komponen User
// Mengirim data user sebagai props ke komponen User
//children
function ComponentProperti() {
  return (
    <User
      name="Ellen Joe"
      username="sharky" 
      bio="I am a software engineer"
      isVerified={true}
    />
  );
}

// Export komponen agar bisa digunakan di file lain
export default ComponentProperti