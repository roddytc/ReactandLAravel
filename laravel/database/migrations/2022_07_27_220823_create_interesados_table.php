<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('interesados', function (Blueprint $table) {
            $table->id();
            $table->string('identificacion');
            $table->string('nombre_apellido');
            $table->string('fecha_nacimiento');
            $table->string('celular');
            $table->string('telefono');
            $table->string('correo');
            $table->string('estado_civil');
            $table->string('sexo');
            $table->string('ubicacion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('interesados');
    }
};
