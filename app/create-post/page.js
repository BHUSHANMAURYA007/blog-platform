const handleCreate = async () => {
  try {
    console.log("Creating post...");

    const { error } = await supabase.from("posts").insert([
      {
        title,
        body,
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Post created ✅");
  } catch (err) {
    console.log(err);
    alert("Network error ❌");
  }
};