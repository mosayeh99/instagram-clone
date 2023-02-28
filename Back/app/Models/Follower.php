<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follower extends Model
{
    use HasFactory;
    protected $fillable=['user_id_self','user_id_other'];

    public function User()
    {
        // return $this->hasMany(User::class,'id','user_id_other');
        if(request()->routeIs('followers')){
        return $this->hasMany(User::class, 'id', 'user_id_self');
        }
        return $this->hasMany(User::class, 'id', 'user_id_other');
    }
    }