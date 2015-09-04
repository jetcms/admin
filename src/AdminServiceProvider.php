<?php namespace JetCMS\Admin;

use Illuminate\Support\ServiceProvider;

class AdminServiceProvider extends ServiceProvider {
	/**
	 * Bootstrap the application services.
	 *
	 * @return void
	 */
	public function boot()
	{
            
            //$this->loadViewsFrom(__DIR__.'/../views', 'lara');
          
            $this->publishes([
                __DIR__.'/../resources' => base_path('resources'),
				__DIR__.'/../app/' => base_path('/app'),
                __DIR__.'/../config/' => base_path('/config')
            ]);
            include __DIR__.'/../routes.php';
            //include __DIR__.'/../composer.php';
	}
        // ---
	/**
	 * Register the application services. 
	 *
	 * @return void
	 */
	public function register()
	{
		//
	}
        
}