<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<div style="margin: 50px;">
    {{-- main Page --}}
    <h3>Add Story</h3><br>
    <a href="{{ url('/Stories_testing') }}" class="btn btn-primary" >Create + </a>
<hr>
    {{-- add Pop up page --}}
    @if(session('status'))
    <h6 class="alert alert-success">{{ session('status') }}</h6>

    @endif
    <form action="{{ url('/add_story') }}" method="POST" enctype="multipart/form-data">
        @csrf
        {{-- <div class="col-auto"> --}}
           User ID: <input type="text" name="user_id" class="form-control"><br>
            <input type="file" name="story_img" class="form-control" id="inputGroupFile01" ><br>
            <button class="btn btn-primary">Share</button>
        {{-- </div> --}}
    </form>

    {{-- at Profile to display --}}
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>user ID</th>
                <th>story</th>
                {{-- <th>edit</th> --}}
                <th>delete</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($storyyyyyy as $item)
            <tr>
                @if(session('status2'))
    <h6 class="alert alert-success">{{ session('status2') }}</h6>

    @endif
                <td>{{$item->user_id}}</td>
                <td>
                    <img src="{{ asset('StoryUploaded/'.$item->story_img) }}" width="70px" height="70px" alt="image"></td>
                {{-- <td><a href="" class="btn btn-primary btn-sm">Edit</a></td> --}}
                {{-- <td><a href="{{ url('delete_Story/'.$item->id) }}" class="btn btn-danger btn-sm">Delete</a></td> --}}
                {{-- delete --}}
                <td>
                <form action="{{ url('Stories_testing/delete_Story/'.$item->id) }}" method="POST"  enctype="multipart/form-data">
                @csrf @method('DELETE')
                <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                </form>
            </td>
            </tr>
                
            @endforeach
        </tbody>
    </table>


</div>