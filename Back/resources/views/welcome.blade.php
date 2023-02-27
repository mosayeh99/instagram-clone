<h2>Add Post</h2>
<form action="{{route('posts.store')}}" method="post" enctype="multipart/form-data">
    @csrf
    <textarea name="caption"></textarea><br><br>
    <input type="file" name="images[]" multiple><br><br>
    <input type="submit">
</form>
<br><br><br><br>
<h2>Add Reel</h2>
<form action="{{route('reels.store')}}" method="post" enctype="multipart/form-data">
    @csrf
    <textarea name="caption"></textarea><br><br>
    <input type="file" name="reel"><br><br>
    <input type="submit">
</form>
