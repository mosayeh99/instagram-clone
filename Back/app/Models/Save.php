<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Save extends Model
{
    use HasFactory;

    /**
     * Get the parent saveable model (post or reel).
     */
    public function saveable(): MorphTo
    {
        return $this->morphTo();
    }
}
