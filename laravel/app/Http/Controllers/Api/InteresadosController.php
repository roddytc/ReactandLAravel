<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Interesados;

class InteresadosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $interesados = Interesados::all();
        return $interesados;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $interesado = new Interesados();
        $interesado->identificacion =$request->identificacion;
        $interesado->nombre_apellido =$request->nombre_apellido;
        $interesado->fecha_nacimiento =$request->fecha_nacimiento;
        $interesado->celular =$request->celular;
        $interesado->telefono =$request->telefono;
        $interesado->correo =$request->correo;
        $interesado->estado_civil =$request->estado_civil;
        $interesado->sexo =$request->sexo;
        $interesado->ubicacion =$request->ubicacion;


        $interesado->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $interesado = Interesados::find($id);
        return $interesado;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $interesado = Interesados::findOrFail($request->id);
        $interesado->identificacion =$request->identificacion;
        $interesado->nombre_apellido =$request->nombre_apellido;
        $interesado->fecha_nacimiento =$request->fecha_nacimiento;
        $interesado->celular =$request->celular;
        $interesado->telefono =$request->telefono;
        $interesado->correo =$request->correo;
        $interesado->estado_civil =$request->estado_civil;
        $interesado->sexo =$request->sexo;
        $interesado->ubicacion =$request->ubicacion;
        
        $interesado->save();
        return $interesado;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $interesado = Interesados::destroy($id);
        return $interesado;
    }
}
