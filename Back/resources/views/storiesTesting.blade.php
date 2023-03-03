<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<div style="margin: 50px;">
    {{-- add Pop up page --}}
    @if(session('status'))
    <h6 class="alert alert-success">{{ session('status') }}</h6>
    @endif

    {{-- adding --}}
    <form action=" {{ url('/stories/add_story') }} " method="POST" enctype="multipart/form-data">
        @csrf
        <input type="hidden" name="user_id" class="form-control" value="35"><br>
        <input type="file" name="story_img" class="form-control" id="inputGroupFile01" ><br>
        <button class="btn btn-primary">Share</button>
    </form>

    {{-- at Profile to display --}}  


</div>