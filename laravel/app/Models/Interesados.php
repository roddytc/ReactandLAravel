<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Interesados extends Model
{
    protected $fillable = ['identificacion','nombre_apellido','fecha_nacimiento','celular','telefono','correo','estado_civil','sexo','ubicacion'];
}
