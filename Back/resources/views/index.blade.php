<h2>Posts</h2>
@foreach($posts as $post)
<div>
    <p>Caption: {{$post->caption}}</p>
    <div>
        <a href="{{route('likes.add', $post->id)}}" >like</a>
        <a href="{{route('likes.remove', $post->id)}}" >Unlike</a>
    </div>
    <div>
        <a href="{{route('saves.add', $post->id)}}" >Save</a>
        <a href="{{route('saves.remove', $post->id)}}" >Unsaved</a>
    </div>
    <form action="{{route('comments.store', $post->id)}}" method="post">
        @csrf
        <textarea name="body"></textarea>
        <input type="submit">
    </form>
</div>
@endforeach

<h2>Reels</h2>
@foreach($reels as $reel)
<div>
    <p>Caption: {{$reel->caption}}</p>
    <div>
        <a href="{{route('likes.reel.add', $reel->id)}}" >like</a>
        <a href="{{route('likes.reel.remove', $reel->id)}}" >Unlike</a>
    </div>
    <div>
        <a href="{{route('saves.reel.add', $reel->id)}}" >Save</a>
        <a href="{{route('saves.reel.remove', $reel->id)}}" >Unsaved</a>
    </div>
    <form action="{{route('comments.reel.store', $reel->id)}}" method="post">
        @csrf
        <textarea name="body"></textarea>
        <input type="submit">
    </form>
</div>
@endforeach
