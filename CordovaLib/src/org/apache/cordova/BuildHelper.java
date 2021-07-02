

package org.apache.cordova;

/*
 * This is a utility class that allows us to get the BuildConfig variable, which is required
 * for the use of different providers.  This is not guaranteed to work, and it's better for this
 * to be set in the build step in config.xml
 *
 */

import android.app.Activity;
import android.content.Context;

import java.lang.reflect.Field;


public class BuildHelper {


    private static String TAG="BuildHelper";

    /*
     * This needs to be implemented if you wish to use the Camera Plugin or other plugins
     * that read the Build Configuration.
     *
     * Thanks to Phil@Medtronic and Graham Borland for finding the answer and posting it to
     * StackOverflow.  This is annoying as hell!  However, this method does not work with
     * ProGuard, and you should use the config.xml to define the application_id
     *
     */

    public static Object getBuildConfigValue(Context ctx, String key)
    {
        try
        {
            Class<?> clazz = Class.forName(ctx.getPackageName() + ".BuildConfig");
            Field field = clazz.getField(key);
            return field.get(null);
        } catch (ClassNotFoundException e) {
            LOG.d(TAG, "Unable to get the BuildConfig, is this built with ANT?");
            e.printStackTrace();
        } catch (NoSuchFieldException e) {
            LOG.d(TAG, key + " is not a valid field. Check your build.gradle");
        } catch (IllegalAccessException e) {
            LOG.d(TAG, "Illegal Access Exception: Let's print a stack trace.");
            e.printStackTrace();
        }

        return null;
    }

}